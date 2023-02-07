const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const favoritesRouter = require("./controllers/favoritesController");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(config.MONGODB_URI)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());
app.use("/api/favorites", favoritesRouter);

module.exports = app;
