const NotificationModal = require("../../models/notifications/Modal");

const GetNotification = async (req, res) => {
  try {
    const data = await NotificationModal.find();
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};
const GetUserNotifications = async (req, res) => {
  try {
    const data = await NotificationModal.find({ sentto: req.body?.id });
    let unread = await data.filter((f) => f.isRead == false);
    let read = await data.filter((f) => f.isRead == true);
    res.send({
      unread: unread,
      read: read,
      unreadcount: unread?.length,
      readcount: read?.length,
      isSuccess: true,
    });
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

const UpdateNotification = async (req, res) => {
  try {
    console.log(req.body);
    let data = await NotificationModal.updateOne(
      { _id: req.body.id },
      {
        $set: {
          isRead: true,
        },
      }
    );
    res.send({ isSuccess: true, message: "notification update successfully" });
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
  GetUserNotifications,
  UpdateNotification,
};
