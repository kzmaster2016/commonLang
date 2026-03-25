import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoClient } from 'mongodb';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.resolve(__dirname, '../../config/mongodb.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const defaults = config.defaults ?? {};

const host = defaults.host ?? '127.0.0.1';
const port = defaults.port ?? 27017;
const dbName = defaults.database ?? 'test';
const collectionName = defaults.collection ?? 'users';
const authSource = defaults.authSource ?? 'admin';

const user = defaults.user ?? '';
const password = defaults.password ?? '';
const auth = user && password
  ? `${encodeURIComponent(user)}:${encodeURIComponent(password)}@`
  : '';
const uri = `mongodb://${auth}${host}:${port}/?authSource=${encodeURIComponent(authSource)}`;

const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });

async function main() {
  await client.connect();
  try {
    const collection = client.db(dbName).collection(collectionName);

    await collection.insertOne({
      name: 'Bob',
      age: 30,
      created_at: new Date().toISOString(),
    });

    const userDoc = await collection.findOne({ name: 'Bob' });
    console.log(userDoc);

    // await collection.updateOne({ name: 'Bob' }, { $set: { age: 31 } });
    // await collection.deleteOne({ name: 'Bob' });
  } finally {
    await client.close();
  }
}

main().catch((err) => {
  console.error('mongodb request failed:', err.message);
  process.exitCode = 1;
});