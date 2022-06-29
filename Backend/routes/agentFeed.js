/* eslint-disable no-unused-vars */
const express = require("express");
const router = express.Router();
const fetchagent = require("../middleware/fetchagent");
const Donation = require("../models/Donation");
const Agent = require("../models/Agent");
const AllocatedDonation = require("../models/AllocatedDonation");
const DeliveredDonation = require("../models/DeliveredDonation");

const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Donations using: GET "/api/donations/agent/agentallocated". Login required
router.get("/agentallocated", fetchagent, async (req, res) => {
  try {
    const allocated = await AllocatedDonation.find({ agent: req.agent.id });
    res.json(allocated);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Update Status and remove an existing Donation in agent feed using: DELETE "/api/donations/agent/removedagentdonation/:id/:dstatus". Login required
router.delete(
  "/removedagentdonation/:id/:dstatus",
  fetchagent,
  async (req, res) => {
    try {
      const filter = { _id: req.params.id };
      const update = { status: req.params.dstatus };
      await AllocatedDonation.findOneAndUpdate(filter, update, { new: true })
        .then((doc) => {
          // console.log(doc._id);
          // console.log(doc.agent);

          // Inserting the doc in destination collection
          DeliveredDonation.insertMany([doc])
            .then((d) => {
              //console.log("Saved Successfully");
            })
            .catch((error) => {
              console.log(error);
            });

          // Removing doc from the source collection
          AllocatedDonation.deleteOne({ _id: doc._id })
            .then((d) => {
              //console.log("Removed succesfully");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
      res.json({
        Status: "Delivered",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Get All the Delivered Donations made by agent using: GET "/api/donations/agent/fetchalldelivered". Login required
router.get("/fetchalldelivered", fetchagent, async (req, res) => {
  try {
    const delivered = await DeliveredDonation.find();
    res.json(delivered);
  } catch (error) {
    console.error(error);
    console.error(error.message);

    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: Get delivered Donations by a specific agnt using: GET "/api/donations/agent/agentdelivered". Login required
router.get("/agentdelivered", fetchagent, async (req, res) => {
  try {
    const agentdelivered = await DeliveredDonation.find({
      agent: req.agent.id,
    });
    res.json(agentdelivered);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
