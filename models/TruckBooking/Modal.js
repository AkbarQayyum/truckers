const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("truckbookings", Schema);
module.exports = Modal;
