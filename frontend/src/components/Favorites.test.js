/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Favorites from "./Favorites";

const favorites = [
  { name: "test1", weight: 2, price: 10, roast: "5" },
  { name: "test2", weight: 2, price: 10, roast: "5" },
];

test("renders items to favorites list", () => {
  const { container } = render(
    <Favorites favorites={favorites} deleteFavorite={() => {}} />
  );

  const div = container.querySelector(".favoritesItem");
  expect(div).toHaveTextContent("test1");
});

test("Dont render favorite items with empty list", () => {
  const { container } = render(
    <Favorites favorites={[]} deleteFavorite={() => {}} />
  );

  const div = container.querySelector(".favorites");
  const items = container.querySelector(".favoritesItem");
  expect(div).not.toContain(items);
});
