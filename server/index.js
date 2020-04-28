const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listening at port: ${port}`);
  }
});

app.use('/', express.static(path.join(__dirname, '../client/dist')));