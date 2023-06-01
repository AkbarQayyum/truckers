const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const SellController = require("../controllers/SellVehicles/SellVehicleController");
router.get("/", SellController.GetAllVehicles);
router.post("/approved", SellController.getAllVehicleByName);
router.post("/register/", SellController.PostSelling);
router.get("/:id", SellController.GetVehicleById);
router.put("/update/", SellController.UpdateVehicleData);
router.delete("/delete/:id", SellController.RemoveVehicle);

module.exports = router;
