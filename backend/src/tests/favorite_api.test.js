const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Favorite = require("../models/favorite");

const api = supertest(app);

const initialFavorites = [
  {
    name: "test1",
    weight: 1,
    price: 1,
    roast: "2",
  },
  {
    name: "test2",
    weight: 2,
    price: 2,
    roast: "2",
  },
];

beforeEach(async () => {
  await Favorite.deleteMany({});
  let favoriteObject = new Favorite(initialFavorites[0]);
  await favoriteObject.save();
  favoriteObject = new Favorite(initialFavorites[1]);
  await favoriteObject.save();
});

afterAll(async () => {
  await mongoose.connection.close();
});

test("favorites are returned as json", async () => {
  await api
    .get("/api/favorites")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("all favorites are returned", async () => {
  const response = await api.get("/api/favorites");

  expect(response.body).toHaveLength(initialFavorites.length);
});

test("a specific favorite is within the response", async () => {
  const response = await api.get("/api/favorites");

  console.log(response);

  const contents = response.body.map((r) => r.name);

  expect(contents).toContain("test2");
});
