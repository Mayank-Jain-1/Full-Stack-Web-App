const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')
const DB = 'mongodb+srv://root:23080518@cluster0.x9pkd2d.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology:  true,
  useFindAndModify: false
}).then( () => {
  console.log('connection successful');
}).catch((err) => {
  console.log('Error while connecting to the database');
});


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