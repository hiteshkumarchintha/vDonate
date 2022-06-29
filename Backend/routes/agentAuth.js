const express = require("express");
const Agent = require("../models/Agent");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchagent = require("../middleware/fetchagent");

const JWT_SECRET = "Hiteshkumar";

// ROUTE 1: Create a Agent using: POST "/api/agentAuth/createagent". No login required
router.post(
  "/createagent",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Check whether the agent with this email exists already
      let agent = await Agent.findOne({ success, email: req.body.email });
      if (agent) {
        return res
          .status(400)
          .json({ error: "Sorry a agent with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new agent
      agent = await Agent.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
        isAgent: true,
      });
      const data = {
        agent: {
          id: agent.id,
          isAgent: true,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      // res.json(agent)
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2: Authenticate a Agent using: POST "/api/agentAuth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let agent = await Agent.findOne({ email });
      if (!agent) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, agent.password);
      if (!passwordCompare) {
        let success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      const data = {
        agent: {
          id: agent.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Get loggedin Agent Details using: POST "/api/agentAuth/getagent". Login required
router.post("/getagent", fetchagent, async (req, res) => {
  try {
    // eslint-disable-next-line no-undef
    agentId = req.agent.id;
    // eslint-disable-next-line no-undef
    const agent = await Agent.findById(agentId).select("-password");
    res.send(agent);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
