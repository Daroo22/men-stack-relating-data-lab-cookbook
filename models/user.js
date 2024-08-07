const mongoose = require('mongoose');

// user.js

const foodSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true, 
    }
  });
  

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  foods: [foodSchema],
});
//applications = pantry
const User = mongoose.model('User', userSchema);

module.exports = User;