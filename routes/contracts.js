const express = require("express");
const ContractSchema = require("../models/Contracts");
const ContractFactory = require("./classes/ContractFactory");

const router = express.Router();

var uniqid = require("uniqid");

router.get("/", async (req, res) => {
  try {
    const contracts = await ContractSchema.find();
    res.json(contracts);
  } catch (err) {
    res.json({ err_message: err });
  }
});

router.get("/:contractId", async (req, res) => {
  try {
    const contract = await ContractSchema.findById(req.params.contractId);
    res.json(contract);
  } catch (err) {
    res.json({ err_message: err });
  }
});

router.post("/:type", async (req, res) => {
  const {
    contractStatus,
    projectConstructor,
    customer,
    address,
    contractType,
    startDate,
    milestones,
  } = req.body;

  switch (req.params.type.toLowerCase()) {
    case "fixed":
      const contractFx = ContractFactory.create("fixed");
      const budget = req.body.budget;
      try {
        const savedContract = await contractFx
          .createContract(
            contractStatus,
            budget,
            projectConstructor,
            customer,
            address,
            contractType,
            startDate,
            milestones
          )
          .save();
        res.json(savedContract);
      } catch (err) {
        console.log("Error creating contract: ", err);
        res.send({ error: "something went wrong in saving the contract" });
      }
      break;

    case "reimbursement":
      const contractRb = ContractFactory.create("reimbursement");
      try {
        const savedContract = await contractRb
          .createContract(
            contractStatus,
            projectConstructor,
            customer,
            address,
            contractType,
            startDate,
            milestones
          )
          .save();
        res.json(savedContract);
      } catch (err) {
        console.log("Error creating contract: ", err);
        res.send({ error: "something went wrong in saving the contract" });
      }
      break;
  }
});

router.patch("/status/:contractId", async (req, res) => {
  try {
    const updatedPost = await ContractSchema.updateOne(
      { contractId: String(req.params.contractId) },
      { $set: { contractStatus: req.body.contractStatus } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ error: "something went wrong updating contract status" });
  }
});

router.patch("/milestone/add/:contractId", async (req, res) => {
  try {
    const updatedPost = await ContractSchema.updateOne(
      { contractId: String(req.params.contractId) },
      { $push: { milestones: req.body.milestone } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ error: "something went wrong updating contract milestone" });
  }
});

module.exports = router;
