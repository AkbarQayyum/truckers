const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("beopari", Schema);
module.exports = Modal;
