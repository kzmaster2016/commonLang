def read_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            print("文件内容长度：", len(content))
    except FileNotFoundError:
        print(f"文件不存在：{path}")
    except PermissionError:
        print(f"没有权限读取文件：{path}")
    except Exception as e:
        print(f"发生未知错误：{e}")


import requests

def fetch_api_data(url):
    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()  # 抛出 HTTP 错误
        data = response.json()
        print("请求成功，数据：", data)
    except requests.exceptions.Timeout:
        print("请求超时")
    except requests.exceptions.ConnectionError:
        print("网络连接错误")
    except requests.exceptions.HTTPError as e:
        print("HTTP错误：", e.response.status_code)
    except ValueError:
        print("返回的不是有效的 JSON")
    except Exception as e:
        print("其他未知网络错误：", e)
        
        
import sqlite3

def query_db(db_path, sql):
    # try:
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()
        cursor.execute(sql)
        result = cursor.fetchall()
        print("查询结果：", result)
    # except sqlite3.OperationalError as e:
    #     print("数据库操作错误：", e)
    # except sqlite3.DatabaseError as e:
    #     print("数据库错误：", e)
    # except Exception as e:
    #     print("未知数据库错误：", e)
    # finally:
    #     if 'conn' in locals():
    #         conn.close()


import sys
import traceback

def global_exception_handler(exc_type, exc_value, exc_traceback):
    if issubclass(exc_type, KeyboardInterrupt):
        sys.__excepthook__(exc_type, exc_value, exc_traceback)
        return
    print("\n=== 全局异常捕捉 ===")
    traceback.print_exception(exc_type, exc_value, exc_traceback)
    print("程序发生了未处理的异常！",exc_type, exc_value,exc_traceback)

sys.excepthook = global_exception_handler

read_file("data.txt")
fetch_api_data("https://jsonplaceholder.typicode.com/posts/1")
query_db("example.db", "SELECT * FROM users")