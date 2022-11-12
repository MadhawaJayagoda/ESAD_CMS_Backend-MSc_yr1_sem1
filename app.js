const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.options("*", cors());

const contractRoute = require("./routes/contracts");
const DBConnection = require("./utils/db_con");

app.use(bodyparser.json());
app.use("/contracts", contractRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We are on the home page");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

// Connect to Database using Singleton instance
DBConnection.getInstance();

app.listen(3000, () => {
  console.log("Application running on port: ", 3000);
});
