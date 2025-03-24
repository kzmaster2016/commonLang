package net_support

import (
	"fmt"
	"net"
	"testing"
)

func TestServer2(t *testing.T) {
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
		go handleConnection2(conn) // 使用 Goroutine 处理多个客户端
	}
}

func handleConnection2(conn net.Conn) {
	defer conn.Close()
	buffer := make([]byte, 1024)
	n, _ := conn.Read(buffer)
	fmt.Println("Received:", string(buffer[:n]))
	conn.Write([]byte("Hello from Go Server"))
}
