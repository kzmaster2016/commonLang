package sys_cli

import (
	"fmt"
	"time"
	"testing"
	"github.com/shirou/gopsutil/v3/cpu"
	"github.com/shirou/gopsutil/v3/mem"
	"github.com/shirou/gopsutil/v3/disk"
	"github.com/shirou/gopsutil/v3/net"
)

func TestCpu(t *testing.T) {
	percentages, err := cpu.Percent(time.Second, false)
	if err != nil {
		fmt.Println("获取 CPU 使用率失败:", err)
		return
	}
	fmt.Printf("CPU 使用率: %.2f%%\n", percentages[0])
}

func TestMem(t *testing.T) {
	v, err := mem.VirtualMemory()
	if err != nil {
		fmt.Println("获取内存信息失败:", err)
		return
	}

	fmt.Printf("总内存: %.2f GB\n", float64(v.Total)/1e9)
	fmt.Printf("已使用: %.2f GB\n", float64(v.Used)/1e9)
	fmt.Printf("可用: %.2f GB\n", float64(v.Available)/1e9)
	fmt.Printf("使用率: %.2f%%\n", v.UsedPercent)
}

func TestDisk(t *testing.T) {
	usage, err := disk.Usage("/")
	/**
isk.Usage("/") 获取 / 根目录磁盘使用情况（Linux/macOS）。
Windows 下可改为 disk.Usage("C:")。
	*/
	if err != nil {
		fmt.Println("获取磁盘信息失败:", err)
		return
	}

	fmt.Printf("磁盘总空间: %.2f GB\n", float64(usage.Total)/1e9)
	fmt.Printf("已用空间: %.2f GB\n", float64(usage.Used)/1e9)
	fmt.Printf("可用空间: %.2f GB\n", float64(usage.Free)/1e9)
	fmt.Printf("使用率: %.2f%%\n", usage.UsedPercent)
}
func TestNet(t *testing.T) {
	netIO, err := net.IOCounters(false)
	if err != nil {
		fmt.Println("获取网络流量失败:", err)
		return
	}

	fmt.Printf("已发送: %.2f MB\n", float64(netIO[0].BytesSent)/1e6)
	fmt.Printf("已接收: %.2f MB\n", float64(netIO[0].BytesRecv)/1e6)
}
