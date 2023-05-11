const mongoose = require("mongoose");
const LaborSchema = require("./Schema/LaborSchema");
const LaborModal = mongoose.model("labor", LaborSchema);
module.exports = LaborModal;
