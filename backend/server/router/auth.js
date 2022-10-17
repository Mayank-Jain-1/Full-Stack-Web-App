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


router.post('/signin' , async (req,res) => {
  try {
    const {email, password} = req.body;
    
    if (!email || !password) {
      return res.status(400).json({error: "Please enter the email/password" })
    }

    const userLogin = await User.findOne({ email:email });
    userLogin ? res.json({message: "user login successful"})
              : res.json({message: "user doesnt exitst"});

  } catch (err) {
    console.log(err);
  }
})

router.post('/register', async (req,res) => {
  console.log(1);
  const {fullname, email, password, cpassword, dob, gender } = req.body;
  
  if(!fullname  || !email || !password || !cpassword || !dob || !gender) {
    return res.status(422).json({data: req.body,  error: "Plz fill all the fields properly" })
  }
  console.log(2);
  
  try{
    
    const userExists = await User.findOne({email:email})
    console.log(3);
    
    if (userExists) {
      return res.status(422).json({error: "Email already exist"});
    }else if (password !== cpassword){
      return res.status(422).json({error: "Passwords are not matching"});
    }
    const user = new User({fullname, email, password, cpassword, dob, gender});
    
    await user.save(); 
    return res.status(201).json({message: "user resistered successfuly"})

  } catch (err) {
    console.log(err);
  }


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