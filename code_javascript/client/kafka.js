import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Kafka } from 'kafkajs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.resolve(__dirname, '../../config/kafka.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const defaults = config.defaults ?? {};

const broker = `${defaults.host ?? '127.0.0.1'}:${defaults.port ?? 9092}`;
const topic = defaults.topic ?? 'demo-topic';

const kafka = new Kafka({
  clientId: 'common-lang-js-producer',
  brokers: [broker],
  connectionTimeout: 3000,
  requestTimeout: 10000,
  retry: { retries: 0 },
});

const producer = kafka.producer();

async function main() {
  await producer.connect();
  try {
    await producer.send({
      topic,
      messages: [
        {
          key: 'user-1',
          value: JSON.stringify({
            event: 'user.created',
            name: 'Bobnodejs333',
            time: Date.now(),
          }),
          headers: {
            source: 'common-lang-js',
          },
        },
      ],
    });

    console.log('kafka send success');
  } finally {
    await producer.disconnect();
  }
}

main().catch((err) => {
  console.error('kafka send failed:', err.message);
  process.exitCode = 1;
});