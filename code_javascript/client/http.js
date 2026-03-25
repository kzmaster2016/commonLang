import axios from 'axios';

// Disable env proxy inheritance for this demo script.
delete process.env.HTTP_PROXY;
delete process.env.HTTPS_PROXY;
delete process.env.ALL_PROXY;
delete process.env.http_proxy;
delete process.env.https_proxy;
delete process.env.all_proxy;

const http = axios.create({
  timeout: 10000,
  proxy: false,
});

function printAxiosError(error) {
  console.error('request failed:', {
    message: error.message,
    code: error.code,
    status: error.response?.status,
    url: error.config?.url,
    address: error.address,
    port: error.port,
  });
}

async function main() {
  try {
    const getRes = await http.get('http://192.168.200.159/');
    console.log(getRes.data);
  } catch (error) {
    printAxiosError(error);
  }

  try {
    const postRes = await http.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
    console.log(postRes.data);
  } catch (error) {
    printAxiosError(error);
  }
}

main();