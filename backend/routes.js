const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/premium", async (req, res) => {
  const { city } = req.body;

  try {
    const apiKey = "YOUR_API_KEY";

    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
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

module.exports = router;