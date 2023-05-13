const NotificationModal = require("../../models/notifications/Modal");



const GetNotification = async (req, res) => {
  try {
    const data = await NotificationModal.find();
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const GetSingleNotication = async (req, res) => {
  try {
    let data = await NotificationModal.findById(req.params?.id);
    console.log(data);
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};


const RemoveNotification = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await NotificationModal.findByIdAndRemove(id);
    res.send("notification Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  GetNotification,
  GetSingleNotication,
  RemoveNotification,
};