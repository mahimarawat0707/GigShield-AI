const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/gigshield")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

app.use("/", routes);

app.listen(5000, () => console.log("Server running on port 5000"));