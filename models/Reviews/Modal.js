const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("reviews", Schema);
module.exports = Modal;
