const express = require('express');
const app = express();
const port = 3000;

const middleware = (req, res, next) => {
  console.log("This is the middleware check");
  next();
}

app.get('/',  (req,res) => {
  res.send('Home');
});

app.get('/signup',middleware, (req,res) => {
  res.send('signup');
});

app.get('/welcome',middleware, (req,res) => {
  res.send('welcome');
});

app.listen(port);