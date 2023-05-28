const mongoose = require("mongoose");

// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  registerAs: {
    type: String,
    required: true,
    defaultValue: "User",
  },
  isEmailVerified: {
    type: Boolean,
    required: true,
  },
});

//export schema to use in model file

module.exports = userSchema;
