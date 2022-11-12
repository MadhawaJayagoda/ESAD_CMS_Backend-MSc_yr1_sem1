const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Customers", CustomerSchema);
