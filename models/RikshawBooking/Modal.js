const mongoose = require("mongoose");
const Schema = require("../Registrations/Beopari/Schema/Schema");
const Modal = mongoose.model("rikshawbooking", Schema);
module.exports = Modal;
