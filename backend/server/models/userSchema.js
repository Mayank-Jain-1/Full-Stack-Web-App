const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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




userSchema.pre('save', async function(next) {
  if (this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.password, 12);
  }
  next();
});

const User = mongoose.model('USER', userSchema);

module.exports = User