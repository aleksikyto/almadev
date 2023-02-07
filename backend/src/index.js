const config = require("./utils/config");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const favoritesRouter = require("./controllers/favoritesControllers");
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

// Morgan for debugging
morgan.token("resBody", function (req, res) {
  if (res["statusCode"] === 200) {
    const name = req.body.name;
    const weight = req.body.weight;
    return JSON.stringify({ name, weight });
  }
});

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :resBody"
  )
);

const PORT = config.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
