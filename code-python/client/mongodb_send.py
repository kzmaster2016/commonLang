from pymongo import MongoClient

client = MongoClient("mongodb://192.168.4.195:27017")
db = client["test"]
collection = db["users"]

result = collection.insert_one({"name": "David", "age": 28})
print("Inserted ID:", result.inserted_id)
