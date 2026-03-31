const axios = require("axios");
🔥 Replace your /premium route:
router.post("/premium", async (req, res) => {
  const { city } = req.body;

  try {
    const apiKey = "d9a299129e8dd813a1d6ed18518947fa";

    const weather = await axios.get(
      https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
    );

    const rain = weather.data.rain ? weather.data.rain["1h"] || 0 : 0;
    const temp = weather.data.main.temp;

    let premium = 40;

    if (rain > 0) premium += 10;
    if (temp > 310) premium += 5;

    res.json({ premium, rain, temp });
  } catch (err) {
    res.json({ error: "API error" });
  }
});
// const express = require("express");
// const router = express.Router();
// const User = require("./model");
// const axios = require("axios");
//  route:router.post("/premium", async (req, res) => {
//   const { city } = req.body;

//   try {
//     const apiKey = "d9a299129e8dd813a1d6ed18518947fa";

//     const weather = await axios.get(
//   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
// );
//     const rain = weather.data.rain ? weather.data.rain["1h"] || 0 : 0;
//     const temp = weather.data.main.temp;

//     let premium = 40;

//     if (rain > 0) premium += 10;
//     if (temp > 310) premium += 5;

//     res.json({ premium, rain, temp });
//   } catch (err) {
//     res.json({ error: "API error" });
//   }
// });
// // Register
// router.post("/register", async (req, res) => {
//   const user = new User(req.body);
//   await user.save();
//   res.json({ message: "User registered" });
// });

// // Buy Plan
// router.post("/buy", async (req, res) => {
//   const { phone, plan } = req.body;
//   await User.updateOne({ phone }, { plan });
//   res.json({ message: "Plan activated" });
// });

// // Premium
// router.post("/premium", (req, res) => {
//   const { rain, aqi } = req.body;
//   let premium = 40;

//   if (rain > 50) premium += 10;
//   if (aqi > 300) premium += 5;

//   res.json({ premium });
// });

// // Claim
// router.post("/claim", (req, res) => {
//   const { rain } = req.body;

//   if (rain > 50) {
//     return res.json({ status: "Approved", amount: 450 });
//   }

//   res.json({ status: "No Claim" });
// });

// module.exports = router;
