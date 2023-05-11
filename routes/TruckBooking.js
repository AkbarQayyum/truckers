const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const TruckController = require("../controllers/TruckBooking/TruckBookingController");
router.get("/booking", TruckController.GetAllBookings);
router.post("/booking/register/", TruckController.registerTruckBooking);
router.get("/booking/:id", TruckController.GetBookingById);
router.put("/booking/update/", TruckController.updataBooking);
router.delete("/booking/delete/:id", TruckController.RemoveBooking);

module.exports = router;
