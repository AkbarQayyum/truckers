const mongoose = require("mongoose");
Schema = mongoose.Schema;
// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion

const BuiltySchema = new mongoose.Schema({
  route: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  range: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  date: {
    type: String,
  },
  name: {
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
  time: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  receiverAddress: {
    type: String,
    required: true,
  },
  isRegisterBeopari: {
    type: Boolean,
    required: true,
  },
  cnicfront: {
    type: String,
  },
  cnicback: {
    type: String,
  },
  withVehicle: {
    type: Boolean,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  receivercnicfront: {
    type: String,
  },
  receivercnicback: {
    type: String,
  },
  receiverphone: {
    type: String,
    required: true,
  },
  accountable: {
    type: String,
    required: true,
  },
  paymentReceipt: {
    type: String,
    required: true,
  },
  bookerid: {
    type: Schema.Types.ObjectId,
    ref: "RegisterUsers",
    required: true,
  },
  isApproved: {
    type: Boolean,
    required: true,
  },
});

//export schema to use in model file

module.exports = BuiltySchema;
