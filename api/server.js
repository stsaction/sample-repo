const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from the API server!');
});

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
