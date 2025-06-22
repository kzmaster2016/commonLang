package client

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"testing"
)

func TestSendMongo(t *testing.T) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, _ := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://192.168.4.195:27017"))
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
