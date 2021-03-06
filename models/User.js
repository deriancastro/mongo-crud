const mongoose = require('mongoose')
var validator = require('validator')

const userSchema = {
  name: { type: String, required: true },
  age: {
    type: Number,
    min: [16, 'You must be at least 16 years old'],
    required: true,
  },
  email: {
    type: String,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} ist not valid email',
      isAsync: false,
    },
    required: true,
  },
}

module.exports = mongoose.model('User', userSchema)
