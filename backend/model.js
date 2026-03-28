const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  phone: String,
  city: String,
  platform: String,
  income: Number,
  plan: String
});

module.exports = mongoose.model("User", UserSchema);