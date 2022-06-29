const mongoose = require("mongoose");
const { Schema } = mongoose;

const AgentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isAgent: {
    type: Boolean,
    default: false,
  },
});

const Agent = mongoose.model("agent", AgentSchema);
Agent.createIndexes();
module.exports = Agent;
