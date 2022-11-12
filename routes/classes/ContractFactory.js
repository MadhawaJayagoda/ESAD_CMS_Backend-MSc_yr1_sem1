const FixedContract = require("./FixedContract");
const ReimbursementContract = require("./ReimbursementContract");

class ContractFactory {
  static create(type) {
    switch (type.toLowerCase()) {
      case "fixed":
        return new FixedContract();

      case "reimbursement":
        return new ReimbursementContract();
    }
  }
}

module.exports = ContractFactory;
