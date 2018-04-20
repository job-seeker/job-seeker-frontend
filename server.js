'use strict';

const express = require('express');
const favicon = require('serve-favicon');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(favicon(`${__dirname}/favicon.ico`));
app.use(express.static(`${__dirname}/build`));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});