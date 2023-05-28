const mongoose = require("mongoose");
const AttendanceSchema = require("./Schema/Schema");
const DriverAttendanceModal = mongoose.model("driver_attendance", AttendanceSchema);
module.exports = DriverAttendanceModal;
