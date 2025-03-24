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
func encodeTLVClient(t byte, v string) []byte {
	l := uint16(len(v))
	buffer := new(bytes.Buffer)
	buffer.WriteByte(t)
	binary.Write(buffer, binary.BigEndian, l)
	buffer.WriteString(v)
	return buffer.Bytes()
}

// TLV 解码
func decodeTLVClient(data []byte) (byte, string, []byte, error) {
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

func handleServerResponse(conn net.Conn) {
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
			t, v, remaining, err := decodeTLVClient(leftover)
			if err != nil {
				break
			}
			fmt.Printf("Received: Type=%d, Value=%s\n", t, v)
			leftover = remaining
		}
	}
}

func TestClient(t *testing.T) {
	conn, err := net.Dial("tcp", "127.0.0.1:8080")
	if err != nil {
		fmt.Println("Error connecting to server:", err)
		return
	}
	defer conn.Close()

	// 启动监听服务器响应的协程
	go handleServerResponse(conn)

	// 发送 TLV 数据
	messages := []string{"Hello", "World", "TLV Protocol"}
	for _, msg := range messages {
		conn.Write(encodeTLVClient(1, msg))
		time.Sleep(1 * time.Second)
	}

	// 发送心跳包
	ticker := time.NewTicker(5 * time.Second)
	defer ticker.Stop()

	for range ticker.C {
		conn.Write(encodeTLVClient(0, "heartbeat"))
	}
}
