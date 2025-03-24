package net_support

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"net"
	"time"
	"testing"
)

// TLV 编码
func encodeTLV5(t byte, v string) []byte {
	l := uint16(len(v))
	buffer := new(bytes.Buffer)
	buffer.WriteByte(t)
	binary.Write(buffer, binary.BigEndian, l)
	buffer.WriteString(v)
	return buffer.Bytes()
}

// TLV 解码
func decodeTLV5(data []byte) (byte, string, []byte, error) {
	if len(data) < 3 {
		return 0, "", data, fmt.Errorf("incomplete header")
	}
	t := data[0]
	l := binary.BigEndian.Uint16(data[1:3])
	if len(data) < int(3+l) {
		return 0, "", data, fmt.Errorf("incomplete packet")
	}
	v := string(data[3 : 3+l])
	return t, v, data[3+l:], nil
}

// 处理客户端连接
func handleConnection5(conn net.Conn) {
	defer conn.Close()
	conn.SetDeadline(time.Now().Add(30 * time.Second)) // 超时管理

	ticker := time.NewTicker(10 * time.Second) // 心跳
	defer ticker.Stop()

	go func() {
		for range ticker.C {
			_, err := conn.Write(encodeTLV5(0x02, "PING"))
			if err != nil {
				fmt.Println("Client disconnected")
				conn.Close()
				return
			}
		}
	}()

	buffer := make([]byte, 1024)
	var leftover []byte

	for {
		n, err := conn.Read(buffer)
		if err != nil {
			fmt.Println("Connection closed:", err)
			break
		}
		leftover = append(leftover, buffer[:n]...)
		for {
			t, v, remaining, err := decodeTLV5(leftover)
			if err != nil {
				break
			}
			fmt.Printf("Received: Type=%d, Value=%s\n", t, v)
			leftover = remaining
			conn.SetDeadline(time.Now().Add(30 * time.Second))
		}
	}
}

// 启动服务器
func TestServer5(t *testing.T) {
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
		go handleConnection5(conn)
	}
}
