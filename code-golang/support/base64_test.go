package support

import ("testing";"fmt";"encoding/base64")

func TestBase64(t *testing.T) {
	t.Log("testBase64")

	data := "Hello, Base64!匡正"

	// 编码
	encoded := base64.StdEncoding.EncodeToString([]byte(data))
	fmt.Println("Encoded:", encoded)

	// 解码
	decodedBytes, err := base64.StdEncoding.DecodeString(encoded)
	if err != nil {
		fmt.Println("Decode error:", err)
		return
	}
	fmt.Println("Decoded:", string(decodedBytes))
}