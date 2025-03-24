package net_support

import (
	"fmt"
	"net"
	"time"
	"testing"
)

// 心跳和超时处理支持
func TestServer3(t *testing.T) {
	listener, err := net.Listen("tcp", ":8080")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer listener.Close()
	fmt.Println("Server listening on port 8080...")

	for {
		conn, err := listener.Accept()
		if err != nil {
			fmt.Println("Connection error:", err)
			continue
		}
		go handleConnection3(conn)
	}
}

func handleConnection3(conn net.Conn) {
	defer conn.Close()
	timeoutDuration := 30 * time.Second
	conn.SetDeadline(time.Now().Add(timeoutDuration)) // 设置超时时间

	ticker := time.NewTicker(10 * time.Second) // 每 10 秒发送心跳
	defer ticker.Stop()

	go func() {
		for range ticker.C {
			_, err := conn.Write([]byte("PING\n"))
			if err != nil {
				fmt.Println("Client disconnected")
				conn.Close()
				return
			}
		}
	}()

	buffer := make([]byte, 1024)
	for {
		n, err := conn.Read(buffer)
		if err != nil {
			fmt.Println("Connection timeout or closed")
			break
		}
		message := string(buffer[:n])
		fmt.Println("Received:", message)
		conn.SetDeadline(time.Now().Add(timeoutDuration)) // 重置超时
	}
}
