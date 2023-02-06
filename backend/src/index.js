const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const Favorite = require("./models/favorite");
require("dotenv").config();

app.use(cors());
app.use(express.json());

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

app.get("/api/favorites", (req, res) => {
  Favorite.find({}).then((favorites) => {
    res.status(200).json(favorites);
  });
});

app.delete("/api/favorites/:id", (req, res, next) => {
  Favorite.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

app.post("/api/favorites", (req, res) => {
  const body = req.body;

  if (body.name === undefined) {
    return response.status(400).json({ error: "name missing" });
  }

  const favorite = new Favorite({
    name: body.name,
    weight: body.weight,
    price: body.price,
    roast: body.roast || undefined,
  });

  favorite.save().then((savedFavorite) => {
    res.json(savedFavorite);
  });
});

const PORT = process.env.REACT_APP_PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
