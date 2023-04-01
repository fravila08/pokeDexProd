import { describe, it, expect, vi } from "vitest";
import ReactTestRenderer from "react-test-renderer";
import axios from "axios";
import { getPokemon } from "../Pages/Home";
import { Home } from "../Pages/Home";
import { MemoryRouter } from "react-router-dom";

vi.mock("axios");

describe("example()", () => {
  it("will return true if num is 5", () => {
    let num = 5;
    expect(num).toBe(5);
  });
});

describe("getPokemonDetails()", () => {
  it("returns a list of Pokemon objects", async () => {
    const pokeAPIResponse = {
      data: {
        count: 123,
        next: "",
        previous: null,
        results: [{}, {}, {}],
      },
    };

    axios.get.mockResolvedValue(pokeAPIResponse);

    const pokemonData = await getPokemon();
    expect(pokemonData).toStrictEqual(pokeAPIResponse.data.results);
  });
});

describe("TestRenderer Home.jsx", () => {
  it("will turn our page into JSON", () => {
    const pokeAPIResponse = {
      data: {
        count: 123,
        next: "",
        previous: null,
        results: [
          { name: "pikachu" },
          { name: "squirtle" },
          { name: "charizard" },
        ],
      },
    };

    axios.get.mockResolvedValue(pokeAPIResponse);

    const testRenderer = ReactTestRenderer.create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    // THE PATH DESIGNATED TO THIS ROUTE SHOULD BE AN EMPTY /
    expect(testRenderer.toTree().rendered.props.location.pathname).toBe("/");
    // THE PAGE SHOULD HOLD AN H2 ELEMENT WITH THE INNER HTML OF 'Home'
    expect(testRenderer.toJSON().children).toStrictEqual([
      { type: "h2", props: {}, children: ["Home"] },
    ]);
  });
});
