const Modals = require("../../../models/Registrations/Transporters/Modal");
const att = require("../../../models/Attendance/Modal");
const register = async (req, res) => {
  try {
    console.log(req.body);
    const obj = {
      ...req.body,
      isApproved: false,
      isFeePaid: false,
      feetime: "",
    };
    console.log(obj);
    const request = await new Modals(obj);
    const data = await request.save();

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

const getalls = async (req, res) => {
  try {
    const data = await Modals.find().populate("userid");
    res.send({ data: data, isSuccess: true });
  } catch (error) {
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

const SearchVehicle = async (req, res) => {
  try {
    console.log("sdsd");
    let found = await Modals.find({ userid: req.body.userId });

    console.log(found);
    const tempobj = JSON.parse(JSON.stringify(found));
    if (tempobj?.length > 0 && tempobj[0]?.isFeePaid === true) {
      let data = await att.find({
        city: req.body.city,
        vehicle: req.body.vehicle,
        isAvailable: true,
      });
      const ob = JSON.parse(JSON.stringify(data));
      return res.send({
        data: [{ ...ob[0], driverId: tempobj[0] }],
        isSuccess: true,
        message: "ok.!",
      });
    } else if (tempobj?.length > 0 && tempobj[0]?.isFeePaid === false) {
      res.send({
        data: "Fee Not Paid",
        isSuccess: false,
        message: "Fee Not Paid",
      });
    }
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const UpdateFee = async (req, res) => {
  try {
    let data = await Modals.updateOne(
      { userid: req.body.id },
      {
        $set: {
          isFeePaid: true,
          feetime: new Date().toLocaleString(),
        },
      }
    );
    res.send({ message: "Record updated", isSuccess: true });
  } catch (error) {
    res.send({ error: error });
  }
};

const UpdateFeeDetails = async (req, res) => {
  try {
    let data = await Modals.updateOne(
      { userid: req.body.userid },
      {
        $set: {
          receipt: req.body.receipt,
        },
      }
    );
    res.send({ message: "Record updated", isSuccess: true });
  } catch (error) {
    res.send({ error: error });
  }
};

const Update = async (req, res) => {
  try {
    let data = await Modals.updateOne(
      { _id: req.body.id },
      {
        $set: {
          isFeePaid: false,
          receipt: null,
          feetime: null,
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
  SearchVehicle,
  UpdateFee,
  UpdateFeeDetails,
};
