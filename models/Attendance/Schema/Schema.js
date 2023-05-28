const mongoose = require("mongoose");
Schema = mongoose.Schema;
// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion

const AttendanceSchema = new mongoose.Schema({
  city: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  vehicle: {
    type: String,
  },
  rate: {
    type: String,
    required: true,
  },
  registration: {
    type: String,
    required: true,
  },
  range: {
    type: String,
  },
  driverId: {
    type: Schema.Types.ObjectId,
    ref: "RegisterUsers",
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
});

//export schema to use in model file

module.exports = AttendanceSchema;
