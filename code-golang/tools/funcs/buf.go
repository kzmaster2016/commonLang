package funcs
import (
	"bytes"
	"fmt"
	"io"
)

/*************  ✨ Codeium Command 🌟  *************/
// ReadBuf demonstrates the use of bytes.Buffer for writing and reading data
// as well as copying data between buffers.
/**/
func ReadBuf() {
	// Create two new buffers
	buf1 := new(bytes.Buffer)
	buf2 := new(bytes.Buffer)

	buf1.Write([]byte("asdfksdlf\n"))
	buf1.Write([]byte("121321\n"))

	bytes1 := make([]byte, buf1.Len()) //读完
	_, _ = buf1.Read(bytes1)

	fmt.Println("buf1:read", string(bytes1))
	//rd1 := bytes.NewReader(bytes1)
	// for rd1.Len() > 0 {
	// 	B, _ := rd1.ReadByte()
	// 	fmt.Println(string(B))
	// }

	buf1.Write([]byte("asdfksdlf\n"))
	buf1.Write([]byte("121321\n"))

	io.Copy(buf2, buf1)

	fmt.Println("buf2", buf2.String())
}
/******  f96a58e8-c36f-4523-adb0-e16ff6a8a143  *******/
