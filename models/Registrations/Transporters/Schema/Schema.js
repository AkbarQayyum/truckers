const mongoose = require("mongoose");
Schema = mongoose.Schema;
// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion

const GoodsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },
  cnicfront: {
    type: String,
  },
  profile: {
    type: String,
  },
  pic1: {
    type: String,
  },
  pic2: {
    type: String,
  },
  isFeePaid: {
    type: Boolean,
    required: true,
  },
  feetime: {
    type: String,
  },
  isApproved: {
    type: Boolean,
    required: true,
  },
  receipt: {
    type: String,
  },

  userid: {
    type: Schema.Types.ObjectId,
    ref: "RegisterUsers",
    required: true,
    unique: true,
  },
});

//export schema to use in model file

module.exports = GoodsSchema;
