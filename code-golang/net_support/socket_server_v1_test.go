package net_support 

import (
	"fmt"
	"net"
	"testing"
)

func TestServer1(t *testing.T) {
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
		go handleConnection(conn)
	}
}

func handleConnection(conn net.Conn) {
	defer conn.Close()
	buffer := make([]byte, 1024)
	n, _ := conn.Read(buffer)
	fmt.Println("Received:", string(buffer[:n]))
	conn.Write([]byte("Hello from Go Server"))
}
