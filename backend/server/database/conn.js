const mongoose = require('mongoose');
// const DB = process.env.DATABASE;
const DB = "mongodb+srv://root:23080518@cluster0.x9pkd2d.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then( () => {
  console.log('connection successful');
}).catch((err) => {
  console.log(err);
  console.log('Error while connecting to the database');
});

