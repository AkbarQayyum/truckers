const LaborModal = require("../../models/LaborBooking/LaborBookingModal");

const registerLaborBooking = async (req, res) => {
  try {
    console.log(req.body);
    const obj = { ...req.body, isApproved: false };
    console.log(obj);
    const request = await new LaborModal(obj);
    const data = await request.save();

    res.send({
      message: "Labor successfully Register.",
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

const GetAllLaborBookings = async (req, res) => {
  try {
    const data = await LaborModal.find();
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const GetLaborBookById = async (req, res) => {
  try {
    let data = await LaborModal.findById(req.body.id);
    console.log(data);
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const updataBooking = async (req, res) => {
  try {
    let data = await LaborModal.updateOne(
      { _id: req.body.laborid },
      {
        $set: {
          isApproved: true,
        },
      }
    );
    res.send("Labor record updated");
  } catch (error) {
    res.send({ error: error });
  }
};

const RemoveBooking = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await LaborModal.findByIdAndRemove(id);
    res.send("Laborl Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  registerLaborBooking,
  GetAllLaborBookings,
  GetLaborBookById,
  updataBooking,
  RemoveBooking,
};
