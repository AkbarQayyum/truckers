const LaborModal = require("../../models/Labor/LaborModal");

const registerLabor = async (req, res) => {
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
const GetlaborByProfession = async (req, res) => {
  try {
    console.log(req.body);

    let data = await LaborModal.find({
      profession: req.body.profession,
      city: req.body.city,
    });
    console.log(data);
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const data = await LaborModal.find();
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const getLaborById = async (req, res) => {
  try {
    let data = await LaborModal.findById(req.body.id);
    console.log(data);
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const updateUser = async (req, res) => {
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

const removeLabor = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await LaborModal.findByIdAndRemove(id);
    res.send("Labor Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  registerLabor,
  getAllUsers,
  getLaborById,
  updateUser,
  removeLabor,
  GetlaborByProfession,
};
