import yaml

# 编码：将数据转换为 YAML 格式
data = {
    'name': 'John',
    'age': 30,
    'city': 'New York'
}

yaml_str = yaml.dump(data)
print("YAML 编码输出:")
print(yaml_str)

# 解码：将 YAML 格式的字符串解析为字典
parsed_data = yaml.load(yaml_str, Loader=yaml.FullLoader)
print("YAML 解码输出:")
print(parsed_data)