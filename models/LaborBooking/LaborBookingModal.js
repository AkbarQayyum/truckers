const mongoose = require("mongoose");
const LaborBookingSchema = require("./Schema/LaborBookingSchema");
const LaborBookingModal = mongoose.model("laborbookings", LaborBookingSchema);
module.exports = LaborBookingModal;
