const mongoose = require("mongoose");
const { Schema } = mongoose;

const DeliveredDonationSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  category: {
    type: String,
    required: true,
  },
  nameOfTheFood: {
    type: String,
    required: true,
  },
  noOfPeople: {
    type: String,
    required: true,
  },
  timeOfCookedFood: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  allocation: {
    type: Boolean,
    default: false,
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "agent",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "Not Delivered",
  },
});

module.exports = mongoose.model("delivereddonation", DeliveredDonationSchema);
