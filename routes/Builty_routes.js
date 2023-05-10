const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const builtyControllers = require("../controllers/builtyController/builtyController");
router.get("/", builtyControllers.getAllBuilties);
router.post("/addbuilty/", builtyControllers.AddBuilty);
router.get("/singlebuilty/:id", builtyControllers.getBultyById);
router.put("/update/builty", builtyControllers.updateBuilty);
router.delete("/delete/builty/:id", builtyControllers.removeBuilty);

module.exports = router;
