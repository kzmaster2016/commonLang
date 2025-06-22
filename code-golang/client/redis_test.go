package client

import (
	"context"
	"fmt"
	"github.com/redis/go-redis/v9"
	"testing"
)

var ctx = context.Background()

func TestRedis(t *testing.T) {
	rdb := redis.NewClient(&redis.Options{
		Addr: "192.168.4.195:6379",
	})

	// 写入
	err := rdb.Set(ctx, "namego", "Carol", 0).Err()
	if err != nil {
		panic(err)
	}

	// 读取
	val, err := rdb.Get(ctx, "namego").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println("namego:", val)

	// 删除
	// rdb.Del(ctx, "namego")
}
