const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const RikshawBooking = require("../controllers/RikshawBooking/RikshawBookingController");
router.get("/", RikshawBooking.GetAllBookings);
router.post("/booking/", RikshawBooking.registerRikshawBooking);
router.get("/booking/:id", RikshawBooking.GetBookingById);
router.put("/update/booking", RikshawBooking.updataBooking);
router.delete("/delete/booking/:id", RikshawBooking.RemoveBooking);

module.exports = router;
