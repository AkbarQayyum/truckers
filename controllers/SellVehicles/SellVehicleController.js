const SellModal = require("../../models/SellVehicles/Modal");

const PostSelling = async (req, res) => {
  try {
    console.log(req.body);
    const obj = { ...req.body, isApproved: false };
    console.log(obj);
    const request = await new SellModal(obj);
    const data = await request.save();

    res.send({
      message: "Data successfully Register.",
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

const GetAllVehicles = async (req, res) => {
  try {
    const data = await SellModal.find();
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const getAllVehicleByName = async (req, res) => {
  try {
    const data = await SellModal.find({
      vehicle: req.body.title,
    });
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const GetVehicleById = async (req, res) => {
  try {
    let data = await SellModal.findById(req.body.id);
    console.log(data);
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const UpdateVehicleData = async (req, res) => {
  try {
    let data = await SellModal.updateOne(
      { _id: req.body.id },
      {
        $set: {
          isApproved: flase,
        },
      }
    );
    res.send({ message: "Vehicle record updated", isSuccess: true });
  } catch (error) {
    res.send({ message: error,isSuccess:false });
  }
};

const RemoveVehicle = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await SellModal.findByIdAndRemove(id);
    res.send("Vehicle Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  PostSelling,
  GetAllVehicles,
  GetVehicleById,
  UpdateVehicleData,
  RemoveVehicle,
  getAllVehicleByName,
};
