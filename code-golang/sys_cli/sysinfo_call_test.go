package sys_cli

import (
	"fmt"
	"os"
	"runtime"
	"testing"
	"os/exec"
)

func TestSysinfo(t *testing.T) {

	fmt.Println("操作系统:", runtime.GOOS)                   // 获取操作系统 (windows, linux, darwin 等)
	fmt.Println("架构:", runtime.GOARCH)                   // 获取 CPU 架构 (amd64, 386, arm64 等)
	fmt.Println("CPU 核心数:", runtime.NumCPU())            // 获取 CPU 核心数
	fmt.Println("Goroutine 数量:", runtime.NumGoroutine()) // 当前 Goroutine 数量

	// 获取指定环境变量
	home := os.Getenv("HOME") // Linux/macOS
	if home == "" {
		home = os.Getenv("USERPROFILE") // Windows
	}
	fmt.Println("用户主目录:", home)

	// 获取所有环境变量
	envs := os.Environ()
	fmt.Println("所有环境变量:")
	for _, env := range envs[:5] { // 只打印前5个
		fmt.Println(env)
	}
}

func TestSyscall(t *testing.T) {

	_, err := exec.LookPath("git") // 检查 `git` 是否存在
	if err != nil {
		fmt.Println("Git 未安装")
	} else {
		fmt.Println("Git 已安装")
	}

	var cmd *exec.Cmd
	if runtime.GOOS == "windows" {
		cmd = exec.Command("ping", "baidu.com")
	} else {
		cmd = exec.Command("ping", "-c", "4", "baidu.com") // Linux/macOS
	}

	output, err := cmd.CombinedOutput() // 获取标准输出和标准错误
	if err != nil {
		fmt.Println("执行失败:", err)
		return
	}
	fmt.Println("Ping 结果:\n", string(output))
}

