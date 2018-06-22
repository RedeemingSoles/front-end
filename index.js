'use strict';

require('dotenv').config();

var express = require('express');  // eslint-disable-line
var app = express();  // eslint-disable-line

app.use(express.static(`${__dirname}/build`));

app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/build/index.html`);
});

app.listen(process.env.PORT, () => {
  console.log('__SERVER_UP__', process.env.PORT);
});
