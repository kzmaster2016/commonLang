package io_tests

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"log"
	"testing"
)

type Data struct {
	Int    int32
	Float  float32
	Double float64
	Bool   bool
	String string
}

// 封包函数
func packData(data Data) ([]byte, error) {
	var buffer bytes.Buffer

	// 打包整数（包括负整数）
	err := binary.Write(&buffer, binary.LittleEndian, data.Int)
	if err != nil {
		return nil, err
	}

	// 打包浮动数
	err = binary.Write(&buffer, binary.LittleEndian, data.Float)
	if err != nil {
		return nil, err
	}

	// 打包双精度浮动数
	err = binary.Write(&buffer, binary.LittleEndian, data.Double)
	if err != nil {
		return nil, err
	}

	// 打包布尔值
	var boolByte byte
	if data.Bool {
		boolByte = 1
	} else {
		boolByte = 0
	}
	err = binary.Write(&buffer, binary.LittleEndian, boolByte)
	if err != nil {
		return nil, err
	}

	// 打包字符串长度和字符串本身
	strLen := int32(len(data.String))
	err = binary.Write(&buffer, binary.LittleEndian, strLen)
	if err != nil {
		return nil, err
	}
	err = binary.Write(&buffer, binary.LittleEndian, []byte(data.String))
	if err != nil {
		return nil, err
	}

	return buffer.Bytes(), nil
}

// 解包函数
func unpackData(binaryData []byte) (Data, error) {
	var data Data
	buffer := bytes.NewReader(binaryData)

	// 解包整数（包括负整数）
	err := binary.Read(buffer, binary.LittleEndian, &data.Int)
	if err != nil {
		return data, err
	}

	// 解包浮动数
	err = binary.Read(buffer, binary.LittleEndian, &data.Float)
	if err != nil {
		return data, err
	}

	// 解包双精度浮动数
	err = binary.Read(buffer, binary.LittleEndian, &data.Double)
	if err != nil {
		return data, err
	}

	// 解包布尔值
	var boolByte byte
	err = binary.Read(buffer, binary.LittleEndian, &boolByte)
	if err != nil {
		return data, err
	}
	data.Bool = boolByte == 1

	// 解包字符串长度
	var strLen int32
	err = binary.Read(buffer, binary.LittleEndian, &strLen)
	if err != nil {
		return data, err
	}

	// 解包字符串
	strBytes := make([]byte, strLen)
	err = binary.Read(buffer, binary.LittleEndian, &strBytes)
	if err != nil {
		return data, err
	}
	data.String = string(strBytes)

	return data, nil
}

func TestDataBin(t *testing.T) {
	// 示例数据
	data := Data{
		Int:    -12345,
		Float:  3.14,
		Double: 3.141592653589793,
		Bool:   true,
		String: "Hello, Binary World!",
	}

	// 封包数据
	binaryData, err := packData(data)
	if err != nil {
		log.Fatal("Error packing data:", err)
	}

	// 输出封包后的二进制数据
	fmt.Printf("Packed Data (Hex): %x\n", binaryData)

	// 解包数据
	unpackedData, err := unpackData(binaryData)
	if err != nil {
		log.Fatal("Error unpacking data:", err)
	}

	// 输出解包后的数据
	fmt.Println("Unpacked Data:", unpackedData)
}
