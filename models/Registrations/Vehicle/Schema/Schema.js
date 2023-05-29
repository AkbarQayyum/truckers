const mongoose = require("mongoose");
Schema = mongoose.Schema;
// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion

const VehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  vehicleType: {
    type: String,
    required: true,
  },

  ownerPhone: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },
  pic1: {
    type: String,
  },
  pic2: {
    type: String,
  },
  profile: {
    type: String,
  },
  cnicfront: {
    type: String,
  },
  ownerpic: {
    type: String,
  },
  ownerlicence: {
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

module.exports = VehicleSchema;
