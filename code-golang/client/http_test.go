package client

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"testing"
)



func TestSendPost(t *testing.T) {
	data := map[string]interface{}{
		"title":  "foo",
		"body":   "bar",
		"userId": 1,
	}
	jsonData, _ := json.Marshal(data)

	resp, err := http.Post("https://jsonplaceholder.typicode.com/posts", "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	var result map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&result)
	fmt.Println(result)
}

func TestSendGet(t *testing.T) {
	client := &http.Client{}

	req, err := http.NewRequest("GET", 
	//"https://jsonplaceholder.typicode.com/posts/1",
	"http://192.168.4.195",
	 nil)
	if err != nil {
		panic(err)
	}
	req.Header.Set("Authorization", "Bearer your-token")

	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body:= new(bytes.Buffer)
	_, _ = body.ReadFrom(resp.Body)
	fmt.Println(body.String())	
}
