import mysql from 'mysql2';


const conn = mysql.createConnection({
  host: '192.168.4.195',
  user: 'root',
  password: 'rootpassword',
  database: 'mydb'
});

// 新增
conn.query('INSERT INTO users (name, age) VALUES (?, ?)', ['Bob', 30]);

// 修改
//conn.query('UPDATE users SET age = ? WHERE name = ?', [31, 'Bob']);

// 删除
//conn.query('DELETE FROM users WHERE name = ?', ['Bob']);

conn.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  results.forEach(row => {
    console.log(`${row.name} is ${row.age} years old.`);
  });
  //console.log(results);
});

conn.end();
