const express = require('express');
const router = express.Router();

require('../database/conn');
const User = require('../models/userSchema');

router.get('/',  (req,res) => {
  res.send('Home');
});


router.get('/welcome', (req,res) => {
  res.send('welcome');
});


router.post('/login' , async (req,res) => {
  try {
    const {email, password} = req.body;
    
    if (!email || !password) {
      return res.status(401).json({error: "Please enter the email/password" , statusCode:res.statusCode});
    }

    const userLogin = await User.findOne({ email:email });
    if (userLogin) {
      res.status(200).json({message: "user login successful", statusCode:res.statusCode});
    }else{
      res.status(402).json({message: "user doesnt exitst", statusCode:res.statusCode});
    }
  } catch (err) {
    console.log(err);
  }
})

router.post('/register', async (req,res) => {
  const {fullname, email, password, cpassword, dob, gender } = req.body;
  
  if(!fullname  || !email || !password || !cpassword || !dob || !gender) {
    return res.status(422).json({data: req.body,  error: "Plz fill all the fields properly", statusCode:res.statusCode})
  }
  
  try{
    
    const userExists = await User.findOne({email:email})
    if (userExists) {
      return res.status(422).json({error: "Email already exist", statusCode:res.statusCode});
    }else if (password !== cpassword){
      return res.status(422).json({error: "Passwords are not matching", statusCode:res.statusCode});
    }
    const user = new User({fullname, email, password, cpassword, dob, gender});
    const saved = await user.save(); 
    return res.status(201).json({message: "user resistered successfuly", statusCode:res.statusCode})

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