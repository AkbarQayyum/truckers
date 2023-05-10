const mongoose = require("mongoose");
const BuiltySchema = require("./Schema/BuiltySchema");
const BuiltyModal = mongoose.model("builty", BuiltySchema);
module.exports = BuiltyModal;
