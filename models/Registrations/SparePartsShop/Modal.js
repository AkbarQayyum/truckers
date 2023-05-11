const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("spareparts", Schema);
module.exports = Modal;
