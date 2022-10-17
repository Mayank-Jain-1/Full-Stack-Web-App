const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  cpassword: {
    type: String,
    require: true
  },

  dob: {
    type: String,
    required: true
  },

  gender: {
    type: String,
    required: true
  }

})


const User = mongoose.model('USER', userSchema);

module.exports = User
