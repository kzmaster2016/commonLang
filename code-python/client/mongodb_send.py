from pymongo import MongoClient

import json

# 从mongodb.json配置文件读取连接信息
with open('config/mongodb.json', 'r') as file:
    config = json.load(file)
    
# 使用配置文件中的信息连接MongoDB
print("Connecting to MongoDB at {}:{}".format(config['defaults']['host'], config['defaults']['port']))

client = MongoClient("mongodb://" +config['defaults']['host'] + ":" +
                    str(config['defaults']['port']) + "/test?authSource=admin")
                    #  +config['defaults']['host']+":"+config['defaults']['host']+"/test?authSource=admin")
db = client["test"]
collection = db["users"]

result = collection.insert_one({"name": "David", "age": 28})
print("Inserted ID:", result.inserted_id)
