package net_support

import  "encoding/binary"

func binDemo() ([]byte, error) {	
	// 二进制编码
	var buf = make([]byte, 8)
	binary.BigEndian.PutUint64(buf, 123456)
	return buf, nil
}

