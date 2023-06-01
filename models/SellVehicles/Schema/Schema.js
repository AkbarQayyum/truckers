const mongoose = require("mongoose");
Schema = mongoose.Schema;
// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion

const SellVehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  pic1: {
    type: String,
    required: true,
  },

  pic2: {
    type: String,
  },
  price: {
    type: String,
  },
  vehicle: {
    type: String,
  },
  desc: {
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

module.exports = SellVehicleSchema;
