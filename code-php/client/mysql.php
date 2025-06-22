<?php
$pdo = new PDO("mysql:host=192.168.4.195;dbname=mydb", "root", "rootpassword");


// 新增
$pdo->prepare("INSERT INTO users (name, age) VALUES (?, ?)")->execute(["Alice", 25]);

// 修改
// $pdo->prepare("UPDATE users SET age = ? WHERE name = ?")->execute([26, "Alice"]);

// 删除
// $pdo->prepare("DELETE FROM users WHERE name = ?")->execute(["Alice"]);

$stmt = $pdo->query("SELECT * FROM users");
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
print_r($data);
