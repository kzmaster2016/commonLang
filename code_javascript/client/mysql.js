import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2/promise';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.resolve(__dirname, '../../config/database.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const defaults = config.defaults ?? {};

async function main() {
  const conn = await mysql.createConnection({
    host: defaults.host ?? '127.0.0.1',
    port: defaults.port ?? 3306,
    user: defaults.user ?? 'root',
    password: defaults.password ?? '',
    database: defaults.database ?? 'test',
  });

  try {
    // await conn.execute('INSERT INTO sys_user (name, age) VALUES (?, ?)', ['Bob', 30]);
    // await conn.execute('UPDATE sys_user SET age = ? WHERE name = ?', [31, 'Bob']);
    // await conn.execute('DELETE FROM sys_user WHERE name = ?', ['Bob']);

    const [rows] = await conn.execute('SELECT * FROM sys_user LIMIT 1');
    console.log(rows);
  } finally {
    await conn.end();
  }
}

main().catch((err) => {
  console.error('mysql request failed:', err.message);
  process.exitCode = 1;
});