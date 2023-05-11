const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("hotals", Schema);
module.exports = Modal;
