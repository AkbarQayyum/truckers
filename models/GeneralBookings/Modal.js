const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("generalbooking", Schema);
module.exports = Modal;
