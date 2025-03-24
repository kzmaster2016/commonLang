package oop


import ("testing";"fmt")

// ------------------定义和封装----------------
// 定义结构体
type Person struct {
    Name string
    Age  int
}

// 绑定方法 (值接收者)
func (p Person) SayHello() {
    fmt.Println("Hello, my name is", p.Name)
}

// 绑定方法 (指针接收者，可以修改结构体)
func (p *Person) GrowUp() {
    p.Age += 1
}



// ------------------继承----------------
// 父结构体
type Animal struct {
    Name string
}

// 父类方法
func (a Animal) Speak() {
    fmt.Println(a.Name, "makes a sound")
}

// 子类 Dog 继承 Animal
type Dog struct {
    Animal  // 继承 Animal
    Breed string
    Name string
}

// 子类方法
func (d Dog) Bark() {
    fmt.Println(d.Name, "barks!")
}



// 定义接口
type Speaker interface {
    Speak()
}


// Dog 实现接口方法
func (d Dog) Speak() {
    fmt.Println(d.Name, "says Woof!")
}

// Cat 结构体
type Cat struct {
    Name string
}

// Cat 实现接口方法
func (c Cat) Speak() {
    fmt.Println(c.Name, "says Meow!")
}

// 多态函数
func MakeSound(s Speaker) {
    s.Speak()
}


func TestOOP(t *testing.T) {

    t.Log("testBase64")

    // 封装和定义
    p := Person{Name: "Alice", Age: 25}
    p.SayHello()

    p.GrowUp()
    fmt.Println("After one year, age:", p.Age)

    // 继承
    dog := Dog{Animal: Animal{Name: "Buddy"}, Breed: "Golden Retriever"}

    dog.Speak() // 继承的 Animal 方法
    dog.Bark()  // Dog 自己的方法


    // 
    dog2 := Dog{Name: "Rex"}
    cat := Cat{Name: "Whiskers"}

    MakeSound(dog2) // 输出: Rex says Woof!
    MakeSound(cat) // 输出: Whiskers says Meow!


}
