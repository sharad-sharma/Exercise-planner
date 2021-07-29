const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;