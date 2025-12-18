import {MongoClient} from 'mongodb';
import fs from 'fs';

const config = JSON.parse(
  fs.readFileSync('./config/mongodb.json', 'utf8')
);

//console.log(config);

const uri = 'mongodb://'+config.defaults.host+':'+config.defaults.port+'/test?authSource=admin';

const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const db = client.db('test');
  const collection = db.collection('users');

  // 插入
  await collection.insertOne({ name: 'Bob', age: 30 });

  // 查询
  const user = await collection.findOne({ name: 'Bob' });
  console.log(user);

  // 更新
  //await collection.updateOne({ name: 'Bob' }, { $set: { age: 31 } });

  // 删除
  //await collection.deleteOne({ name: 'Bob' });

  await client.close();
}

run();
