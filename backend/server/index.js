const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose')

dotenv.config({path: './config.env'})
// const port = process.env.PORT;
const port = 3000;
 

require('./database/conn.js');

const middleware = (req, res, next) => {
  console.log("This is the middleware check");
  next();
}

app.use(express.json());
app.use(require('./router/auth'));


app.listen(port);