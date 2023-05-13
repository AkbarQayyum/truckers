const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const NotificationControllers = require("../controllers/NotificationControllers/NotificationController");
router.get("/", NotificationControllers.GetNotification);
router.get("/:id", NotificationControllers.GetSingleNotication);
router.delete("/:id", NotificationControllers.RemoveNotification);

module.exports = router;
