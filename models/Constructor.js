const mongoose = require("mongoose");
const ContractSchema = require("./Contracts").schema;

const ConstructorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  contracts: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Constructor", ConstructorSchema);
