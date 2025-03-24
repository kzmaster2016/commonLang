import urllib.parse

# 要编码的 URL 参数
raw = "https://example.com/search?q=python 编码&lang=zh"

# URL 编码
encoded = urllib.parse.quote(raw)
print("URL 编码:", encoded)

# URL 解码
decoded = urllib.parse.unquote(encoded)
print("URL 解码:", decoded)