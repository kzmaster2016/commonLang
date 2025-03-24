package net_support

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"net"
	"time"
	"testing"
)

// tlv协议支持
func encodeTLV(t byte, v string) []byte {
	l := uint16(len(v))
	buffer := new(bytes.Buffer)
	buffer.WriteByte(t)
	binary.Write(buffer, binary.BigEndian, l)
	buffer.WriteString(v)
	return buffer.Bytes()
}

func decodeTLV(data []byte) (byte, string, error) {
	if len(data) < 3 {
		return 0, "", fmt.Errorf("invalid TLV format")
	}
	t := data[0]
	l := binary.BigEndian.Uint16(data[1:3])
	if len(data) < int(3+l) {
		return 0, "", fmt.Errorf("incomplete data")
	}
	v := string(data[3 : 3+l])
	return t, v, nil
}

func handleConnection4(conn net.Conn) {
	defer conn.Close()
	conn.SetDeadline(time.Now().Add(30 * time.Second)) // 超时管理

	ticker := time.NewTicker(10 * time.Second) // 心跳
	defer ticker.Stop()

	go func() {
		for range ticker.C {
			_, err := conn.Write(encodeTLV(0x02, "PING"))
			if err != nil {
				fmt.Println("Client disconnected")
				conn.Close()
				return
			}
		}
	}()

	buf := make([]byte, 1024)
	for {
		n, err := conn.Read(buf)
		if err != nil {
			fmt.Println("Connection timeout or closed")
			break
		}
		t, v, err := decodeTLV(buf[:n])
		if err == nil {
			fmt.Printf("Received: Type=%d, Value=%s\n", t, v)
			conn.SetDeadline(time.Now().Add(30 * time.Second))
		}
	}
}

func TestServer4(t *testing.T) {
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
		go handleConnection4(conn)
	}
}
