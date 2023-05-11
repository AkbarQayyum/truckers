const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("sellvehicles", Schema);
module.exports = Modal;
