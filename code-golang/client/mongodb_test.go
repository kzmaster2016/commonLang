package client

import (
	"context"
	"encoding/json"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"os"
	"testing"
	"time"
)

type Config struct {
    Defaults Defaults `json:"defaults"`
}

type Defaults struct {
    Host string `json:"host"`
    Port int    `json:"port"`
}
func TestSendMongo(t *testing.T) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var conf Config
	// config/mongodb.json获取json字符串
	// os.Args = strings.Split(os.Args[0], "/")
	confData, _ := os.ReadFile("../../config/mongodb.json")

	fmt.Println( string(confData))

	
    err := json.Unmarshal(confData, &conf)
    if err != nil {
        panic(err)
    }
	fmt.Println(conf)

	client, _ := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://"+conf.Defaults.Host+":"+fmt.Sprint(conf.Defaults.Port)))
	collection := client.Database("test").Collection("users")

	// 插入
	collection.InsertOne(ctx, map[string]interface{}{"name": "Carol", "age": 28})

	// 查询
	var result map[string]interface{}
	collection.FindOne(ctx, map[string]interface{}{"name": "Carol"}).Decode(&result)
	fmt.Println(result)

	// 更新
	//collection.UpdateOne(ctx, map[string]interface{}{"name": "Carol"}, map[string]interface{}{"$set": map[string]interface{}{"age": 29}})

	// 删除
	//collection.DeleteOne(ctx, map[string]interface{}{"name": "Carol"})
}
