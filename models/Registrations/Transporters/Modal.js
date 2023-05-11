const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("transporters", Schema);
module.exports = Modal;
