const mongoose = require("mongoose");
const userSchema = require("./Schemas/UserSchemas");
const Users = mongoose.model("movies", userSchema);
module.exports = Users;
