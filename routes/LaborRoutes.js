const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const LaborController = require("../controllers/LaborBooking/LaborController");
router.get("/", LaborController.getAllUsers);
router.post("/register/", LaborController.registerLabor);
router.get("/:id", LaborController.getLaborById);
router.put("/update/", LaborController.updateUser);
router.delete("/delete/:id", LaborController.removeLabor);

module.exports = router;
