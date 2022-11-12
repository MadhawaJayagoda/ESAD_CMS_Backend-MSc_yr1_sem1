const mongoose = require("mongoose");
const MilestoneSchema = require("./Milestones").schema;
const CustomerSchema = require("./Customers").schema;
const ConstructorSchema = require("./Constructor").schema;

const FixedContractSchema = mongoose.Schema({
  contractId: {
    type: String,
    require: true,
  },
  contractStatus: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  projectConstructor: {
    type: ConstructorSchema,
    required: false,
  },
  customer: {
    type: CustomerSchema,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contractType: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  milestones: {
    type: [MilestoneSchema],
    required: false,
  },
});

module.exports = mongoose.model(
  "FixedContracts",
  FixedContractSchema,
  "contracts"
);
