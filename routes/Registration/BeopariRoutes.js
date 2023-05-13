const express = require("express");
const router = express.Router();
const verifyUser = require("../../MiddleWares/VerifyUser");
const transcontrollers = require("../../controllers/Registrations/Beopari/Controller");
router.get("/", transcontrollers.getalls);
router.post("/", transcontrollers.register);
router.get("/:id", transcontrollers.getById);
router.put("/", transcontrollers.Update);
router.delete("/:id", transcontrollers.Remove);

module.exports = router;
