const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("mechanics", Schema);
module.exports = Modal;
