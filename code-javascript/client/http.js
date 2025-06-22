
import axios from 'axios';

// GET 请求
axios.get('http://192.168.4.195')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// POST 请求
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
