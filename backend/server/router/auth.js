const express = require('express');
const router = express.Router();

require('../database/conn');
const User = require('../models/userSchema');

router.get('/',  (req,res) => {
  res.send('Home');
});

router.get('/signup', (req,res) => {
  res.send('signup');
});

router.get('/welcome', (req,res) => {
  res.send('welcome');
});

router.post('/register', (req,res) => {

  const {fullname, email, password, cpassword, dob, gender } = req.body;

  if(!fullname  || !email || !password || !cpassword || !dob || !gender) {
    return res.status(422).json({ error: "Plz fill all the fields properly" })
  }

  User.findOne({email:email})
    .then((userExists) => {
      if (userExists) {
        return res.status(422).json({error: "Email already exist"});
      }

      const user = new User({fullname, email, password, cpassword, dob, gender});

      user.save().then(() => {
        res.status(201).json({message: "user resistered successfuly"});
      }).catch((err) => {
        res.status(500).json({error: "failed to register"})
        console.log(err);
      }); 
  })

})

module.exports = router;

// {
//   "name" : "Mayank Jain",
//   "email" : "tempmail@gmail.com",
//   "password": "120",
//   "cpassword" : "120",
//   "dob" : "somethi",
//   "gender" : "male"
// }