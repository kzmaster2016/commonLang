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
const groupId = `js-demo-group-${Date.now()}`;// defaults.group_id ?? 'js-demo-group-live';

const kafka = new Kafka({
  clientId: 'common-lang-js-consumer',
  brokers: [broker],
  connectionTimeout: 3000,
  requestTimeout: 10000,
  retry: { retries: 0 },
});

const consumer = kafka.consumer({ groupId });
let count = 0;
let stopping = false;
let resolveFinished;
const finished = new Promise((resolve) => {
  resolveFinished = resolve;
});

async function stopConsumer(reason) {
  if (stopping) {
    return;
  }
  stopping = true;
  console.log(`[consumer-stop] reason=${reason}`);
  try {
    await consumer.stop();
  } finally {
    resolveFinished();
  }
}

process.on('SIGINT', () => {
  void stopConsumer('signal:SIGINT');
});

process.on('SIGTERM', () => {
  void stopConsumer('signal:SIGTERM');
});

async function main() {
  console.log(`[consumer-start] groupId=${groupId} topic=${topic}`);

  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ topic: t, partition, message }) => {
      count += 1;
      const value = message.value?.toString() ?? '';
      const key = message.key?.toString() ?? 'null';
      console.log(`[${count}] topic=${t} partition=${partition} offset=${message.offset} key=${key} value=${value}`);
    },
  });

  // Keep process alive for real-time consumption until stop signal.
  await finished;

  await consumer.disconnect();
  console.log(`kafka consume finished, total=${count}`);
}

main().catch(async (err) => {
  console.error('kafka consume failed:', err.message);
  try {
    await consumer.disconnect();
  } catch (_) {
    // ignore
  }
  process.exitCode = 1;
});