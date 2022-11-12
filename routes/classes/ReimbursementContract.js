const ReimbursementContractSchema = require("../../models/ReimbursementContract");
var uniqid = require("uniqid");

class ReimbursementContract {
  createContract(
    contractStatus,
    projectConstructor,
    customer,
    address,
    contractType,
    startDate,
    milestones
  ) {
    return new ReimbursementContractSchema({
      contractId: uniqid(),
      contractStatus,
      projectConstructor,
      customer,
      address,
      contractType,
      startDate,
      milestones,
    });
  }
}

module.exports = ReimbursementContract;
