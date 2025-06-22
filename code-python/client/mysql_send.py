import mysql.connector

conn = mysql.connector.connect(
    host="192.168.4.195",
    user="root",
    password="rootpassword",
    database="mydb"
)

cursor = conn.cursor()

# 新增
cursor.execute("INSERT INTO users (name, age) VALUES (%s, %s)", ("David", 35))

# 修改
# cursor.execute("UPDATE users SET age = %s WHERE name = %s", (36, "David"))

# 删除
# cursor.execute("DELETE FROM users WHERE name = %s", ("David",))

cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()
for row in rows:
    print(row)

cursor.close()
conn.close()
