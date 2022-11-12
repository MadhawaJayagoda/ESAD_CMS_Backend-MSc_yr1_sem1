const FixedContractSchema = require("../../models/FixedContract");
var uniqid = require("uniqid");

class FixedContract {
  createContract(
    contractStatus,
    budget,
    projectConstructor,
    customer,
    address,
    contractType,
    startDate,
    milestones
  ) {
    return new FixedContractSchema({
      contractId: uniqid(),
      contractStatus,
      budget,
      projectConstructor,
      customer,
      address,
      contractType,
      startDate,
      milestones,
    });
  }
}

module.exports = FixedContract;
