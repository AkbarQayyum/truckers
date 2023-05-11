const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("vehicles", Schema);
module.exports = Modal;
