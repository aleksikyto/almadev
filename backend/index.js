const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let favorites = [
  {
    id: 1,
    name: "Mokka",
    weight: "121",
    price: "1,11",
    roast: "3",
  },
  {
    id: 2,
    name: "Takka",
    weight: "1221",
    price: "3,11",
    roast: "3",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/favorites", (req, res) => {
  res.json(favorites);
});

app.get("/api/favorites/:id", (req, res) => {
  const id = Number(req.params.id);
  const favorite = favorites.find((favorite) => favorite.id === id);

  if (favorite) {
    res.json(favorite);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/favorites/:id", (req, res) => {
  const id = Number(req.params.id);
  favorites = favorites.filter((favorite) => favorite.id !== id);

  res.status(204).end();
});

const generateId = () => {
  const maxId =
    favorites.length > 0 ? Math.max(...favorites.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/favorites", (req, res) => {
  const body = req.body;

  if (!body.name || !body.weight || !body.price) {
    return res.status(400).json({
      error: "name, weight or price missing",
    });
  }

  if (favorites?.filter((favorite) => favorite.name === body.name).length) {
    return res.status(400).json({
      error: "name must be unique",
    });
  }

  const favorite = {
    name: body?.name,
    weight: body?.weight,
    price: body?.price,
    roast: body?.roast,
    id: generateId(),
  };

  favorites = favorites.concat(favorite);

  res.json(favorite);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
