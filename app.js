const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose.connect("mongodb://localhost:27018/Finance");

const apiRoutes = require("./src/modules/routes/routes");

app.use(cors());
app.use(express.json());
app.use("/", apiRoutes);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
