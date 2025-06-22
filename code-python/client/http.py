import requests

#response = requests.get('https://jsonplaceholder.typicode.com/posts/1')
response = requests.get('http://192.168.4.195/')
print(response.status_code)
# print(response.json())
print(response.text)
