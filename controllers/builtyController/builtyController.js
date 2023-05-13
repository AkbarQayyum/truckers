const BuiltyModal = require("../../models/Builty/BuiltyModal");
const notiSchema = require("../../models/notifications/Modal");
const AddBuilty = async (req, res) => {
  try {
    console.log(req.body);
    const obj = { ...req.body, isApproved: false };
    console.log(obj);
    const request = await new BuiltyModal(obj);
    const data = await request.save();
    res.send({
      message: "Builty Request Submitted Successfully",
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

const getAllBuilties = async (req, res) => {
  try {
    const data = await BuiltyModal.find();

    res.send({
      data: data,
      isSuccess: true,
      message: "data fetched successfully",
    });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const getBultyById = async (req, res) => {
  try {
    let data = await BuiltyModal.findById(req.params.id);
    console.log(data);

    res.send({
      isSuccess: true,
      data: data,
      message: "data fetched successfully",
    });
  } catch (error) {
    res.send({ Error: error });
  }
};

const updateBuilty = async (req, res) => {
  try {
    console.log(req.body);
    let data = await BuiltyModal.updateOne(
      { _id: req.body.id },
      {
        $set: {
          isApproved: req.body.isApproved,
        },
      }
    );
    // console.log(data);
    const obj = {
      text: `Your Builty Request from ${req.body.date} Has Been Approved.`,
      sentto: req.body.bookerid,
      isRead: false,
    };
    const request = await new notiSchema(obj);
    const status = await request.save();
    console.log(status);
    // console.log(data);
    res.send("builty record updated");
  } catch (error) {
    res.send({ error: error });
  }
};

const removeBuilty = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await BuiltyModal.findByIdAndRemove(id);
    res.send("Builty Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  removeBuilty,
  updateBuilty,
  getBultyById,
  getAllBuilties,
  AddBuilty,
};
