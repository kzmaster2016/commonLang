package funcs

import (
	"fmt"
	"math"
)

func Test() {
	fmt.Println("aa")
	math.Abs(float64(12))

	go func() {

	}()

	defer func() {

	}()
}

func Test2() {

}

type structName struct {
	fieldName string
	sd1       int16
	parent       *structName
}

func (s *structName) Test3() int{
	return 1
}

func (s *structName) Test4() {

}

func (s *structName) Test5() {

}
