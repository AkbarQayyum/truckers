const ReviewModal = require("../../models/Reviews/Modal");

const AddReview = async (req, res) => {
  try {
    console.log(req.body);
    const obj = { ...req.body };
    console.log(obj);
    const request = await new ReviewModal(obj);
    const data = await request.save();

    res.send({
      message: "Review Successfully Posted.",
      isSuccess: true,
    });
  } catch (error) {
    res.send({
      Error: error,
      isSuccess: false,
      message: "something went wrong please try again.!",
    });
  }
};

const GetAllReviews = async (req, res) => {
  try {
    const data = await ReviewModal.find();
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};



const RemoveReview = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ReviewModal.findByIdAndRemove(id);
    res.send("Review Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  AddReview,
  GetAllReviews,
  RemoveReview,
};
