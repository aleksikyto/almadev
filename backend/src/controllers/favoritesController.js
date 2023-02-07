const favoritesRouter = require("express").Router();
const Favorite = require("../models/favorite");

favoritesRouter.get("/", (req, res) => {
  Favorite.find({})
    .then((favorites) => {
      if (favorites) {
        res.status(200).json(favorites);
      } else {
        res.status(400).end();
      }
    })
    .catch((error) => console.log(error.message));
});

favoritesRouter.delete("/:id", (req, res, next) => {
  Favorite.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => console.log(error.message));
});

favoritesRouter.post("/", (req, res) => {
  const body = req.body;

  if (body.name === undefined) {
    return response.status(400).json({ error: "name missing" });
  }

  const favorite = new Favorite({
    name: body.name,
    weight: body.weight || undefined,
    price: body.price || undefined,
    roast: body.roast || undefined,
  });

  favorite
    .save()
    .then((savedFavorite) => {
      if (savedFavorite) {
        res.status(200).json(savedFavorite);
      } else {
        res.status(400).end();
      }
    })
    .catch((error) => console.log(error.message));
});

module.exports = favoritesRouter;
