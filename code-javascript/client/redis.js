import Redis from 'ioredis';

const redis = new Redis({
    host: '192.168.4.195', // Redis服务器地址
    port: 6379, // Redis服务器端口 
    //password: 'your_password', // 如果有密码，设置密码
}); // 默认 localhost:6379

// 写入
redis.set('namejs', 'Bob3');

// 读取
redis.get('namejs', (err, result) => {
  console.log(result);
});

// 删除
// redis.del('name');
