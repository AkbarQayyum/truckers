const mongoose = require("mongoose");
Schema = mongoose.Schema;
// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion

const MechanicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

 
  address: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  cnicfront: {
    type: String,
  },
  cnicback: {
    type: String,
  },
  shop: {
    type: String,
  },
  profile: {
    type: String,
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

module.exports = MechanicSchema;
