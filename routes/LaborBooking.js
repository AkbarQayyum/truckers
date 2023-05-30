const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const LaborController = require("../controllers/LaborBooking/LaborBookingControllers");
router.get("/booking", LaborController.GetAllLaborBookings);
router.post("/booking/register/", LaborController.registerLaborBooking);
router.get("/booking/:id", LaborController.GetLaborBookById);
router.post("/search", LaborController.GetlaborByProfession);
router.put("/booking/update/", LaborController.updataBooking);
router.delete("/booking/delete/:id", LaborController.RemoveBooking);

module.exports = router;
