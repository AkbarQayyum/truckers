const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const ReviewController = require("../controllers/ReviewContollers/ReviewController");
router.get("/", ReviewController.GetAllReviews);
router.post("/", ReviewController.AddReview);
router.delete("/:id", ReviewController.RemoveReview);

module.exports = router;
