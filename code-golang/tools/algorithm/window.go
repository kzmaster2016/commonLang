package algorithm

import (
    "fmt"
)

// 滑动窗口解法，找最长不含有重复字符的子串
func LengthOfLongestSubstring(s string) int {
    charSet := make(map[byte]bool);
    si:=0;
    maxLength := 0;
	maxcharSet := make(map[byte]bool);

    for i:=0;i<len(s);i++{
        for charSet[s[i]] {
            delete(charSet,s[si])
            si++;
        }
        charSet[s[i]] = true;
        if newLen:= i-si+1;newLen>maxLength{
            maxLength = newLen
			maxcharSet = copyMap(charSet)
        }
    }
   
   	fmt.Println(maxcharSet, maxLength)

	for k,v:=range maxcharSet{
		fmt.Printf("%c %v\n", k,v)
	}
	
    return maxLength
}
func copyMap(original map[byte]bool) map[byte]bool {
    // 创建一个新的 map
    copy := make(map[byte]bool)

    // 遍历原始 map，将键值对逐个复制到新 map 中
    for key, value := range original {
        copy[key] = value
    }

    return copy
}