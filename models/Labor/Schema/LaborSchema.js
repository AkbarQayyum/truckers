const mongoose = require("mongoose");
Schema = mongoose.Schema;
// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion

const LaborSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,

  },
  address: {
    type: String,
    required: true,

  },
  profession: {
    type: String,
    required: true,


  },
  experience: {
    type: String,
    required: true,

  },
  phoneNumber: {
    type: String,
    required: true,
  },
  cnicfront: {
    type: String,
    required: true,
  },
  cnicback: {
    type: String,
    required: true,
  },
 isApproved: {
    type: Boolean,
    required: true,
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: "RegisterUsers",
    required: true,
  },
});

//export schema to use in model file

module.exports = LaborSchema;
