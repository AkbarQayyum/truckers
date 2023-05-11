const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("servicestations", Schema);
module.exports = Modal;
