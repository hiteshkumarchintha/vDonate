const mongoose = require("mongoose");
const { Schema } = mongoose;

const DonationSchema = new Schema({
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
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
});

module.exports = mongoose.model("donation", DonationSchema);
