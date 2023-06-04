const { response } = require("express");
const Users = require("../../models/UserModal");
const Builty = require("../../models/Builty/BuiltyModal");
const Transporters = require("../../models/Registrations/Transporters/Modal");
const Vehicles = require("../../models/SellVehicles/Modal");
const Beopari = require("../../models/Registrations/Beopari/Modal");
const Drivers = require("../../models/Registrations/Drivers/Modal");
const Hotals = require("../../models/Registrations/Hotals/Modal");
const Mechanic = require("../../models/Registrations/Mechanic/Modal");
const ServiceStation = require("../../models/Registrations/ServiceStations/Modal");
const SpareParts = require("../../models/Registrations/SparePartsShop/Modal");
const VehiclesRegister = require("../../models/Registrations/Vehicle/Modal");
const Labor = require("../../models/Labor/LaborModal");

const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const apiKey = process.env.SENDGRID;
const AttendanceModal = require("../../models/Attendance/Modal");
sgMail.setApiKey(apiKey);
// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   port: 465,

//   auth: {
//     user: "zumzumtransporters@gmail.com",
//     pass: "swulemljarlyoyjt",
//   },
// });

const registerUsers = async (req, res) => {
  try {
    console.log(req.body);
    const obj = { ...req.body, isEmailVerified: false };
    console.log(obj);
    const request = await new Users(obj);
    const data = await request.save();

    if (req.body.registerAs === "Driver") {
      const obj = {
        city: "",
        from: "",
        to: "",
        vehicle: "",
        rate: "0",
        registration: "0",
        range: "",
        driverId: data?._id,
        isAvailable: true,
      };
      const re = await new AttendanceModal(obj);
      const temp = await re.save();
      console.log(temp);
    }

    const msg = {
      to: data?.email,
      from: "akbarqayyum0@gmail.com", // Use the email address or domain you verified above
      subject: "Email Verification",
      text: "Account Verification Mail",
      html: `<div style={text-align:center;}><h3>Welcome To Zum Zum Transport Services</h3><h5>Please Click Button To Verify Your Email</h5><a href='https://average-cape-toad.cyclic.app/users/auth/verifyemail/${data?._id}' target={_blank}><button>Verify Email</button></a></div>`,
    };

    await sgMail
      .send(msg)
      .then((result) => {
        console.log(result);
        res.send({
          message:
            "User successfully created and Email Verification Link send.",
          isSuccess: true,
        });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
    res.send({
      Error: error,
      isSuccess: false,
      message: "something went wrong please try again.!",
    });
  }
};

const VerifyEmails = async (req, res) => {
  try {
    // const data = await Users.find();
    console.log(req.body);
    console.log(req.params?.id);
    let data = await Users.updateOne(
      { _id: req.params.id },
      {
        $set: {
          isEmailVerified: true,
        },
      }
    );
    if (data) {
      res.send(
        "<h1>Congratulation Your email has been verifies you can now login into application</h1>"
      );
    }
  } catch (error) {
    console.log(error);
    res.send({ Error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const data = await Users.find();

    res.send(data);
  } catch (error) {
    res.send({ Error: error });
  }
};

const getuserById = async (req, res) => {
  try {
    let data = await Users.findOne({
      email: req.body.username,
      password: req.body.password,
    });
    console.log(data);
    if (data) {
      console.log("hello");
      let token = jwt.sign({ ...data }, process.env.SECRET);
      res.send({
        isSuccess: true,
        token: token,
        user: { ...data?._doc, password: null },
        message: "user login successfully",
      });
    } else {
      res.send({
        isSuccess: false,
        message: "email or password does not match.",
      });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

const updateUser = async (req, res) => {
  try {
    let data = await Users.updateOne(
      { _id: req.body.movieId },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          username: req.body.username,
        },
      }
    );
    res.send("user record updated");
  } catch (error) {
    res.send({ error: error });
  }
};

const removeUser = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Users.findByIdAndRemove(id);
    res.send("Users Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};
const GetDashboardData = async (req, res) => {
  try {
    let user = await Users.find();
    let vehi = await VehiclesRegister.find();
    let spare = await SpareParts.find();
    let serv = await ServiceStation.find();
    let mech = await Mechanic.find();
    let hota = await Hotals.find();
    let driver = await Drivers.find();
    let beo = await Beopari.find();
    let sell = await Vehicles.find();
    let trans = await Transporters.find();
    let buil = await Vehicles.find();
    let lab = await Labor.find();
    await res.send({
      cardsData: {
        user: user?.length,
        builty: buil?.length,
        transporter: trans?.length,
        vehicle: sell?.length,
      },
      ChartData: {
        vehicle: vehi?.length,
        sparepart: spare?.length,
        service: serv?.length,
        mechanic: mech?.length,
        hotal: hota?.length,
        driver: driver?.length,
        beopari: beo?.length,
        transporter: trans?.length,
        labor: lab?.length,
      },
      isSuccess: true,
      message: "Data Fetched",
    });
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  registerUsers,
  getAllUsers,
  getuserById,
  removeUser,
  updateUser,
  VerifyEmails,
  GetDashboardData,
};
