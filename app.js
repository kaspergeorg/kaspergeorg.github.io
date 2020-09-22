const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(PORT, () => {
  console.log('running on port', PORT);
});