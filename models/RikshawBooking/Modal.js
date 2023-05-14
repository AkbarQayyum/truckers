const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("rikshawbooking", Schema);
module.exports = Modal;
