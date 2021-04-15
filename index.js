const express = require('express');

const port = 3000;
const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port,() => console.log(`Server is up on port ${port}`));