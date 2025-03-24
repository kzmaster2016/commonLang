package net_support

import (
	// "encoding/binary"
	"fmt"
	"testing"
)

// TLV 结构体
type TLV struct {
	Tag    byte
	Length byte
	Value  []byte
}

// TLV 编码
func EncodeTLV(tag byte, value string) []byte {
	length := byte(len(value))
	data := append([]byte{tag, length}, []byte(value)...)
	return data
}

// TLV 解码
func DecodeTLV(data []byte) (TLV, error) {
	if len(data) < 2 {
		return TLV{}, fmt.Errorf("invalid TLV data")
	}
	tag := data[0]
	length := data[1]
	if len(data) < int(2+length) {
		return TLV{}, fmt.Errorf("invalid TLV length")
	}
	value := data[2 : 2+length]
	return TLV{Tag: tag, Length: length, Value: value}, nil
}

func TestTLV(t *testing.T) {
	t.Log("testTLV")
	// 编码
	encoded := EncodeTLV(0x01, "Hello")
	fmt.Printf("Encoded TLV: %X\n", encoded)

	// 解码
	decoded, err := DecodeTLV(encoded)
	if err != nil {
		fmt.Println("Decode error:", err)
		return
	}
	fmt.Printf("Decoded TLV: Tag=%X, Length=%d, Value=%s\n", decoded.Tag, decoded.Length, string(decoded.Value))
}
