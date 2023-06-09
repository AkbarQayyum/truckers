const Modals = require("../../../models/Registrations/Drivers/Modal");
const DriverModal = require("../../../models/Attendance/Modal");
const register = async (req, res) => {
  try {
    console.log(req.body);
    const obj = { ...req.body, isApproved: false };
    console.log(obj);
    const request = await new Modals(obj);
    const data = await request.save();
    if (data) {
      let obj = {
        city: "",
        from: "",
        to: "",
        vehicle: "",
        rate: "0",
        registration: "0",
        range: "",
        driverId: data?.userid,
        isAvailable: false,
      };
      const requ = await new DriverModal(obj);
      const dat = await requ.save();
    }
    res.send({
      message: "Register successfully.",
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
const Attendance = async (req, res) => {
  try {
    let data = await DriverModal.updateOne(
      { driverId: req.body.driverId },
      {
        $set: {
          isAvailable: true,
          city: req.body.city,
          from: req.body.from,
          to: req.body.to,
          vehicle: req.body.vehicle,
          rate: req.body.rate,
          range: req.body.range,
          registration: req.body.registration,
          date: new Date().toLocaleString(),
        },
      }
    );
    res.send({ message: "Record updated", isSuccess: true });
  } catch (error) {
    res.send({ error: error });
  }
};

const getalls = async (req, res) => {
  try {
    const data = await Modals.find();
    const attend = await DriverModal.find().populate("driverId").exec();

    console.log(attend);
    res.send({ data: data, isSuccess: true, attend: attend });
  } catch (error) {
    console.log(error);
    res.send({ Error: error, isSuccess: false });
  }
};

const SearchDriver = async (req, res) => {
  try {
    const attend = await Modals.find({
      city: req.body.city,
      vehicle: req.body.vehicle,
    }).populate("userid");

    res.send({ data: attend, isSuccess: true, message: "Data Fetched" });
  } catch (error) {
    console.log(error);
    res.send({ Error: error, isSuccess: false });
  }
};

const GetAttendance = async (req, res) => {
  try {
    const attend = await DriverModal.find().populate("driverId");

    res.send({ data: attend, isSuccess: true, message: "Data Fetched" });
  } catch (error) {
    console.log(error);
    res.send({ Error: error, isSuccess: false });
  }
};

const getById = async (req, res) => {
  try {
    let data = await Modals.findById(req.body.id);
    console.log(data);
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const Update = async (req, res) => {
  try {
    let data = await Modals.updateOne(
      { _id: req.body.laborid },
      {
        $set: {
          isApproved: true,
        },
      }
    );
    res.send("Record updated");
  } catch (error) {
    res.send({ error: error });
  }
};

const Remove = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Modals.findByIdAndRemove(id);
    res.send("Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  register,
  getalls,
  getById,
  Update,
  Remove,
  Attendance,
  SearchDriver,
  GetAttendance,
};
