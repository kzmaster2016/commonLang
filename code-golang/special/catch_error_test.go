package special

import (
	"context"
	"fmt"
	"testing"
	"time"
)

func worker(ctx context.Context, errChan chan error, id int) {
	defer func() {
		if r := recover(); r != nil {
			errChan <- fmt.Errorf("worker-%d panic: %v", id, r)
		}
	}()

	select {
	case <-ctx.Done():
		fmt.Printf("worker-%d 被取消\n", id)
		return
	case <-time.After(time.Duration(id+1) * time.Second):
		if id == 1 {
			panic("模拟错误")
		}
		fmt.Printf("worker-%d 正常完成\n", id)
	}
}

func TestCatchError(t *testing.T) {

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	errChan := make(chan error, 10)

	for i := 0; i < 3; i++ {
		go worker(ctx, errChan, i)
	}

	go func() {
		err := <-errChan
		fmt.Println("错误被捕获:", err)
		cancel() // 一旦某个协程 panic，就取消所有其他协程
	}()

	time.Sleep(4 * time.Second)

}
