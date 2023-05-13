const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const NotificationSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  sentto: {
    type: Schema.Types.ObjectId,
    ref: "RegisterUsers",
    required: true,
  },
  isRead:{
    type:Boolean,
    required:true
  }
});


module.exports = NotificationSchema;
