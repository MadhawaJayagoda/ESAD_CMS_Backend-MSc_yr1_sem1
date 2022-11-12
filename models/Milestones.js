const mongoose = require("mongoose");

const MilestoneSchema = mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  milestoneName: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  deliveryDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Milestones", MilestoneSchema);
