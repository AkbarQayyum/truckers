const mongoose = require("mongoose");
Schema = mongoose.Schema;
// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion

const BookSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  range: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  laguage: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  receiverAddress: {
    type: String,
    required: true,
  },
  cnicfront: {
    type: String,
  },
  cnicback: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  receiverCnicFront: {
    type: String,
  },
  receiverCnicBack: {
    type: String,
  },
  receiverPhone: {
    type: String,
    required: true,
  },
  accountable: {
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

module.exports = BookSchema;
