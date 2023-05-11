const TruckModal = require("../../models/TruckBooking/Modal");

const registerTruckBooking = async (req, res) => {
  try {
    console.log(req.body);
    const obj = { ...req.body, isApproved: false };
    console.log(obj);
    const request = await new TruckModal(obj);
    const data = await request.save();
    res.send({
      message: "Book successfully Register.",
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

const GetAllBookings = async (req, res) => {
  try {
    const data = await TruckModal.find();
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const GetBookingById = async (req, res) => {
  try {
    let data = await TruckModal.findById(req.body.id);
    console.log(data);
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const updataBooking = async (req, res) => {
  try {
    let data = await TruckModal.updateOne(
      { _id: req.body.bookid },
      {
        $set: {
          isApproved: true,
        },
      }
    );
    res.send("Book record updated");
  } catch (error) {
    res.send({ error: error });
  }
};

const RemoveBooking = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await TruckModal.findByIdAndRemove(id);
    res.send("Book Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  registerTruckBooking,
  GetAllBookings,
  GetBookingById,
  updataBooking,
  RemoveBooking,
};
