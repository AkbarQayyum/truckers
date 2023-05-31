const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const TransporterReceipt = require("../controllers/TransporterRecipt/TransporterReceipt");
router.get("/", TransporterReceipt.getalls);
router.post("/", TransporterReceipt.register);
router.get("/:id", TransporterReceipt.getById);
router.put("/", TransporterReceipt.Update);
router.delete("/:id", TransporterReceipt.Remove);

module.exports = router;
