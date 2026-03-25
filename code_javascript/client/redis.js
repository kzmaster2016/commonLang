import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Redis from 'ioredis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.resolve(__dirname, '../../config/redis.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const defaults = config.defaults ?? {};

const redis = new Redis({
  host: defaults.host ?? '127.0.0.1',
  port: defaults.port ?? 6379,
  password: defaults.password || undefined,
  db: defaults.db ?? 0,
  keyPrefix: defaults.prefix ?? '',
  maxRetriesPerRequest: 1,
});

async function main() {
  try {
    await redis.set('namejs', 'Bob');
    const value = await redis.get('namejs');
    console.log(value);
    // await redis.del('namejs');
  } finally {
    redis.disconnect();
  }
}

main().catch((err) => {
  console.error('redis request failed:', err.message);
  process.exitCode = 1;
});