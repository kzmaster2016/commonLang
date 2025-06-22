package client

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"testing"
)

func TestSendMysql(t *testing.T) {
	dsn := "root:rootpassword@tcp(192.168.4.195:3306)/mydb"
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		panic(err)
	}
	defer db.Close()
	// 新增
	_, _ = db.Exec("INSERT INTO users (name, age) VALUES (?, ?)", "Carol", 28)

	// 修改
	//_, _ = db.Exec("UPDATE users SET age = ? WHERE name = ?", 29, "Carol")

	// 删除
	//_, _ = db.Exec("DELETE FROM users WHERE name = ?", "Carol")

	rows, err := db.Query("SELECT id, name FROM users")
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	for rows.Next() {
		var id int
		var name string
		rows.Scan(&id, &name)
		fmt.Println(id, name)
	}
}
