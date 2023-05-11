const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("drivers", Schema);
module.exports = Modal;
