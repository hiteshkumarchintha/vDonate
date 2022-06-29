/* eslint-disable no-unused-vars */
const express = require("express");
const router = express.Router();
const fetchadmin = require("../middleware/fetchadmin");
const Donation = require("../models/Donation");
const Agent = require("../models/Agent");
const AllocatedDonation = require("../models/AllocatedDonation");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Donations made by all users using: GET "/api/donations/admin/fetchalldonations". Login required
router.get("/fetchalldonations", fetchadmin, async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    console.error(error);
    console.error(error.message);

    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Get All the Agents registered by all agents using: GET "/api/donations/admin/fetchallagents". Login required
router.get("/fetchallagents", fetchadmin, async (req, res) => {
  try {
    const agents = await Agent.find();
    res.json(agents);
  } catch (error) {
    console.error(error);
    console.error(error.message);

    res.status(500).send("Internal Server Error");
  }
});

// // ROUTE 3: Get All allocated donations using: GET "/api/donations/admin/allocateddonations". Login required
// router.get("/allocateddonations", fetchadmin, async (req, res) => {
//   try {
//     let allocatedAgent = "";
//     let allocated=true;
//     const agents = await Agent.find(allocated);
//     res.json(agents,allocated,allocatedAgent);
//   } catch (error) {
//     console.error(error);
//     console.error(error.message);

//     res.status(500).send("Internal Server Error");
//   }
// });

// ROUTE 3: Update allocation of a donation using: PUT "/api/donations/admin/updateallocation/:id". Login required
router.put("/updateallocation/:id", fetchadmin, async (req, res) => {
  const {
    category,
    nameOfTheFood,
    noOfPeople,
    timeOfCookedFood,
    address,
    allocation,
  } = req.body;
  // Create a newNote object
  const newDonate = {};
  if (category) {
    newDonate.category = category;
  }
  if (nameOfTheFood) {
    newDonate.nameOfTheFood = nameOfTheFood;
  }
  if (noOfPeople) {
    newDonate.noOfPeople = noOfPeople;
  }
  if (timeOfCookedFood) {
    newDonate.timeOfCookedFood = timeOfCookedFood;
  }
  if (address) {
    newDonate.address = address;
  }
  if (allocation) {
    newDonate.allocation = allocation;
  }

  // Find the note to be updated and update it
  let donation = await Donation.findById(req.params.id);
  if (!donation) {
    return res.status(404).send("Not Found");
  }

  // if(donation.user.toString() !== req.user.id){
  //     return res.status(401).send("Not Allowed");
  // }

  donation = await Donation.findByIdAndUpdate(
    req.params.id,
    { $set: newDonate },
    { new: true }
  );
  res.json({ donation });
});

// ROUTE 4: Remove an existing Donation in admin feed using: DELETE "/api/donations/admin/removeddonation/:id/aid". Login required
router.delete("/removeddonation/:id/:aid", fetchadmin, async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const update = { allocation: true, agent: req.params.aid };
    await Donation.findOneAndUpdate(filter, update, { new: true })
      .then((doc) => {
        // console.log(doc._id);
        // console.log(doc.agent);

        // Inserting the doc in destination collection
        AllocatedDonation.insertMany([doc])
          .then((d) => {
            //console.log("Saved Successfully");
          })
          .catch((error) => {
            console.log(error);
          });

        // Removing doc from the source collection
        Donation.deleteOne({ _id: doc._id })
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
      allocation: true,
    });

    //     // Finding a doc in the source collection by any
    //     // field and moving it to the destination collection
    //     Donation.findOne({ _id: req.params.id })
    //       .then((doc) => {
    //         console.log(doc);

    //         // Inserting the doc in destination collection
    //         AllocatedDonation.insertMany([doc])
    //           .then((d) => {
    //             console.log("Saved Successfully");
    //           })
    //           .catch((error) => {
    //             console.log(error);
    //           });

    //         // Removing doc from the source collection
    //         Donation.deleteOne({ _id: doc._id })
    //           .then((d) => {
    //             console.log("Removed succesfully");
    //           })
    //           .catch((error) => {
    //             console.log(error);
    //           });
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   } catch (error) {
    //     console.error(error.message);
    //     res.status(500).send("Internal Server Error");
    //   }
    // });

    // router.delete("/removeddonation/:id", fetchadmin, async (req, res) => {
    //   try {
    //     // Find the note to be delete and delete it
    //     let donate = await Donation.findById(req.params.id);
    //     let removedDonation1 = "";
    //     if (!donate) {
    //       return res.status(404).send("Not Found");
    //     }

    //     // // Allow deletion only if user owns this Note
    //     // if (donate.user.toString() !== req.user.id) {
    //     //     return res.status(401).send("Not Allowed");
    //     // }

    //     donate = await Donation.findByIdAndRemove(req.params.id).then(
    //       (err, removedDonation) => {
    //         if (err) {
    //           console.log(err);
    //         } else {
    //           console.log("Removed User : ", removedDonation);

    //           AllocatedDonation.insertOne(removedDonation);

    //           // const allocateddonation = new AllocatedDonation({
    //           //   category: removedDonation.category,
    //           //   nameOfTheFood: removedDonation.nameOfTheFood,
    //           //   noOfPeople: removedDonation.noOfPeople,
    //           //   timeOfCookedFood: removedDonation.timeOfCookedFood,
    //           //   address: removedDonation.address,
    //           //   note: removedDonation.note,
    //           // });

    //           // allocateddonation.save(function (err, doc) {
    //           //   console.log(err);
    //           // });
    //         }
    //       }
    //     );
    //     res.json({
    //       Success: "Donation has been moved to allocations page",
    //       donate: donate,
    //     });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 5: Add a new Donation using: POST "/api/donations/addallocated". Login required
router.post("/addallocated", fetchadmin, async (req, res) => {
  try {
    const {
      category,
      nameOfTheFood,
      noOfPeople,
      timeOfCookedFood,
      address,
      note,
    } = req.body;

    // If there are errors, return Bad request and the errors

    const donation = new AllocatedDonation({
      category,
      nameOfTheFood,
      noOfPeople,
      timeOfCookedFood,
      address,
      note,
    });
    const savedDonation = await donation.save();

    res.json(savedDonation);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 6: Get All the AllocatedDonations made by admin using: GET "/api/donations/admin/fetchallocated". Login required
router.get("/fetchallocated", fetchadmin, async (req, res) => {
  try {
    const allocated = await AllocatedDonation.find();
    res.json(allocated);
  } catch (error) {
    console.error(error);
    console.error(error.message);

    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
