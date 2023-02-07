/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Favorite from "./Favorite";

const favorite = {
  name: "test",
  weight: 2,
  price: 10,
  roast: "5",
};

test("renders name", () => {
  const { container } = render(
    <Favorite favorite={favorite} deleteFavorite={() => {}} />
  );

  const div = container.querySelector(".favorite");
  expect(div).toHaveTextContent("test");
});

test("renders component without price, roast & weight", () => {
  const { container } = render(
    <Favorite favorite={{ name: "test" }} deleteFavorite={() => {}} />
  );

  const div = container.querySelector(".favorite");
  expect(div).toHaveTextContent("test");
});
