const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const userControllers = require("../controllers/UserController/UserControllers");
router.get("/", userControllers.getAllUsers);
router.post("/login/", userControllers.getuserById);
router.post("/register", userControllers.registerUsers);
router.put("/update", userControllers.updateUser);
router.delete("/delete", userControllers.removeUser);

module.exports = router;
