const { response } = require("express");
const Users = require("../../models/UserModal");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
var transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,

  auth: {
    user: "zumzumtransporters@gmail.com",
    pass: "swulemljarlyoyjt",
  },
});

const registerUsers = async (req, res) => {
  try {
    console.log(req.body);
    const obj = { ...req.body, isEmailVerified: false };
    console.log(obj);
    const request = await new Users(obj);
    const data = await request.save();

    const msg = {
      to: data?.email,
      from: "akbarqayyum0@gmail.com", // Use the email address or domain you verified above
      subject: "Email Verification",
      text: "Account Verification Mail",
      html: `<div style={text-align:center;}><h3>Welcome To Zum Zum Transport Services</h3><h5>Please Click Button To Verify Your Email</h5><a href='https://average-cape-toad.cyclic.app/users/auth/verifyemail/${data?._id}' target={_blank}><button>Verify Email</button></a></div>`,
    };

    // var mailOptions = {
    //   from: "zumzumtransporters@gmail.com",
    //   to: data?.email,
    //   subject: "Email Verification",
    //   html: `<div style={text-align:center;}><h3>Welcome To Zum Zum Transport Services</h3><h5>Please Click Button To Verify Your Email</h5><a href='http://localhost:4433/users/auth/verifyemail/${data?._id}' target={_blank}><button>Verify Email</button></a></div>`,
    // };

    sgMail
      .send(msg)
      .then((res) => {
        // console.log(res);
        res.send({
          message:
            "User successfully created and Email Verification Link send.",
          isSuccess: true,
        });
      })
      .catch((err) => console.log(err));

    // await transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     res.send({
    //       message:
    //         "User successfully created and Email Verification Link send.",
    //       isSuccess: true,
    //     });
    //   }
    // });

    // await res.send({ message: "User Register Successfully.", isSuccess: true });
  } catch (error) {
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

module.exports = {
  registerUsers,
  getAllUsers,
  getuserById,
  removeUser,
  updateUser,
  VerifyEmails,
};
