const express = require("express");
const router = express.Router();
const User = require("./model");

// Register
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User registered" });
});

// Buy Plan
router.post("/buy", async (req, res) => {
  const { phone, plan } = req.body;
  await User.updateOne({ phone }, { plan });
  res.json({ message: "Plan activated" });
});

// Dynamic Premium
router.post("/premium", (req, res) => {
  const { rain, aqi } = req.body;
  let premium = 40;

  if (rain > 50) premium += 10;
  if (aqi > 300) premium += 5;

  res.json({ premium });
});

// Claim Trigger
router.post("/claim", (req, res) => {
  const { rain } = req.body;

  if (rain > 50) {
    return res.json({
      status: "Approved",
      amount: 450
    });
  }

  res.json({ status: "No Claim" });
});

module.exports = router;