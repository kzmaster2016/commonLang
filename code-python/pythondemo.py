import time
import uuid
import hashlib
import hmac
import base64
import requests

# API配置信息
BASE_URL = "https://apigateway.damddos.com/fraudopen/v1/openapi/fraud/domain"
SECRET_KEY = "8gG"  # 替换为实际密钥
ACCESS_KEY = "pbB"  # 替换为实际访问密钥

def main():
  try:
    # 请求参数
    timestamp = int(time.time() * 1000)  # 生成时间戳（毫秒）
    nonce = str(uuid.uuid4())  # 生成随机数
    body = "{\"pageNum\":1,\"pageSize\":10,\"startTime\":\"2025-04-10 00:00:00\",\"endTime\":\"2025-04-11 00:00:00\"}"  # 替换为实际请求体内容

    # 计算Body的MD5值
    body_md5 = hashlib.md5(body.replace(" ", "").encode("utf-8")).hexdigest()

    # 构造签名字符串
    signature_str = f"POST|/fraudopen/v1/openapi/fraud/domain|{timestamp}|{nonce}|{ACCESS_KEY}|{body_md5}"

    # 使用HMAC-SHA256生成签名
    signature_hash = hmac.new(SECRET_KEY.encode("utf-8"), signature_str.encode("utf-8"), hashlib.sha256).hexdigest()

    # 拼接认证信息并进行Base64编码
    auth_info = f"{ACCESS_KEY}:{signature_hash}"
    authorization_header = base64.b64encode(auth_info.encode("utf-8")).decode("utf-8")

    # 构造请求头
    headers = {
      "Authorization": authorization_header,
      "Content-Type": "application/json; charset=utf-8",
      "Timestamp": str(timestamp),
      "Nonce": nonce,
      "AccessKey": ACCESS_KEY
    }

    # 发送请求
    response = requests.post(BASE_URL, headers=headers, data=body)

    # 输出响应
    if response.status_code == 200:
      print("Response:", response.text)
    else:
      print("HTTP Error Code:", response.status_code)

  except Exception as e:
    print("Exception:", str(e))

if __name__ == "__main__":
  main()