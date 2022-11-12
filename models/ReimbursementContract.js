const mongoose = require("mongoose");
const MilestoneSchema = require("./Milestones").schema;
const CustomerSchema = require("./Customers").schema;
const ConstructorSchema = require("./Constructor").schema;

const ReimbursementContractSchema = mongoose.Schema({
  contractId: {
    type: String,
    require: true,
  },
  contractStatus: {
    type: String,
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
  "ReimbursementContracts",
  ReimbursementContractSchema,
  "contracts"
);
