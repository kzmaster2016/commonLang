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
const groupId = `js-demo-group-${Date.now()}`;//defaults.group_id ?? `js-demo-group-${Date.now()}`;
const maxMessages = Number(defaults.consume_max_messages ?? 10);
const firstMessageTimeoutMs = Number(defaults.consume_first_message_timeout_ms ?? 15000);

const kafka = new Kafka({
  clientId: 'common-lang-js-consumer',
  brokers: [broker],
  connectionTimeout: 3000,
  requestTimeout: 10000,
  retry: { retries: 0 },
});

const consumer = kafka.consumer({ groupId });
let stopReason = 'unknown';
let stopRequested = false;
let count = 0;
let receivedFirstMessage = false;
let firstMessageTimer = null;
let resolveFinished;
const finished = new Promise((resolve) => {
  resolveFinished = resolve;
});

async function requestStop(reason) {
  if (stopRequested) {
    return;
  }
  stopRequested = true;
  stopReason = reason;
  console.log(`[consumer-stop] reason=${reason}`);
  try {
    await consumer.stop();
  } catch (err) {
    console.error('[consumer-stop] stop failed:', err.message);
  } finally {
    resolveFinished();
  }
}

function clearFirstMessageTimer() {
  if (firstMessageTimer) {
    clearTimeout(firstMessageTimer);
    firstMessageTimer = null;
  }
}

process.on('SIGINT', () => {
  void requestStop('signal:SIGINT');
});

process.on('SIGTERM', () => {
  void requestStop('signal:SIGTERM');
});

async function main() {
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  firstMessageTimer = setTimeout(() => {
    if (!receivedFirstMessage) {
      void requestStop(`firstMessageTimeout:${firstMessageTimeoutMs}ms`);
    }
  }, firstMessageTimeoutMs);

  await consumer.run({
    eachMessage: async ({ topic: t, partition, message }) => {
      if (!receivedFirstMessage) {
        receivedFirstMessage = true;
        clearFirstMessageTimer();
      }

      count += 1;
      const value = message.value?.toString() ?? '';
      const key = message.key?.toString() ?? 'null';
      console.log(`[${count}] topic=${t} partition=${partition} offset=${message.offset} key=${key} value=${value}`);

      if (count >= maxMessages) {
        void requestStop(`maxMessagesReached:${maxMessages}`);
      }
    },
  });

  // consumer.run() starts background loop and returns immediately.
  await finished;

  clearFirstMessageTimer();
  await consumer.disconnect();
  console.log(`kafka consume finished, reason=${stopReason}, total=${count}`);
}

main().catch(async (err) => {
  clearFirstMessageTimer();
  console.error('kafka consume failed:', err.message);
  try {
    await consumer.disconnect();
  } catch (_) {
    // ignore
  }
  process.exitCode = 1;
});