const favoritesRouter = require("express").Router();
const Favorite = require("../models/favorite");

favoritesRouter.get("/", (req, res) => {
  Favorite.find({}).then((favorites) => {
    res.status(200).json(favorites);
  });
});

favoritesRouter.delete("/:id", (req, res, next) => {
  Favorite.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

favoritesRouter.post("/", (req, res) => {
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

module.exports = favoritesRouter;
