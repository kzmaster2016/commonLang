import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Client } from '@opensearch-project/opensearch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.resolve(__dirname, '../../config/elasticsearch.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const defaults = config.defaults ?? {};

const hosts = defaults.hosts ?? ['http://127.0.0.1:9200'];
const index = defaults.index ?? 'users';
const debug = Boolean(defaults.debug ?? false);

const client = new Client({
  nodes: hosts,
  maxRetries: defaults.retries ?? 0,
  requestTimeout: (defaults.request_timeout ?? 15) * 1000,
  pingTimeout: (defaults.connect_timeout ?? 3) * 1000,
});

function unwrapBody(result) {
  return result?.body ?? result;
}

function logDebug(label, data) {
  if (!debug) {
    return;
  }
  console.log(`[DEBUG] ${label}`);
  if (data !== undefined) {
    console.log(typeof data === 'string' ? data : JSON.stringify(data, null, 2));
  }
}

async function main() {
  try {
    const health = unwrapBody(await client.cluster.health());
    logDebug('cluster health', health);

    const id = String(Date.now());
    const indexRes = unwrapBody(await client.index({
      index,
      id,
      body: {
        name: 'Bob',
        age: 30,
        created_at: new Date().toISOString(),
      },
      refresh: true,
    }));
    logDebug('index response', indexRes);

    const searchRes = unwrapBody(await client.search({
      index,
      body: {
        query: {
          match: {
            name: 'Bob',
          },
        },
      },
    }));

    console.log(searchRes.hits?.hits ?? []);
  } catch (err) {
    console.error('opensearch request failed:', err.message);
    if (debug) {
      console.error(err.meta?.body ?? err);
    }
    process.exitCode = 1;
  }
}

main();
