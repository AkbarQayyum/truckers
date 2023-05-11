const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const GeneralController = require("../controllers/GeneralBooking/GeneralBookingController");
router.get("/", GeneralController.GetAllBookings);
router.post("/add", GeneralController.registerBooking);
router.get("/get/:id", GeneralController.GetBookById);
router.put("/update", GeneralController.updataBooking);
router.delete("/delete/:id", GeneralController.RemoveBooking);

module.exports = router;
