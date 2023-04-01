import ReactTestRenderer from "react-test-renderer";
import { describe, it, expect, vi } from "vitest";
import { getPokemonDetails } from "../Pages/Pokemon";
import { MemoryRouter } from "react-router-dom";
import { Pokemon } from "../Pages/Pokemon";
import axios from "axios";

vi.mock("axios");

describe("example()", () => {
  it("will return true if num is 5", () => {
    let num = 5;
    expect(num).toBe(5);
  });
});

describe("getPokemonDetails()", () => {
  it("returns ALL details pertaining to ONE pokemon", async () => {
    const pokeAPIResponse = {
      data: {
        abilities: [],
        base_experience: 101,
        forms: [],
        game_indices: 20,
        height: 3,
        held_items: [],
        id: 132,
        is_default: true,
        location_area_encounters: "",
        moves: [],
        name: "",
        order: 224,
        post_types: [],
        species: {},
        sprites: {},
        stats: [],
        types: [],
        weight: 40,
      },
    };

    axios.get.mockResolvedValue(pokeAPIResponse);

    const pokemonData = await getPokemonDetails();

    expect(pokemonData).toStrictEqual(pokeAPIResponse.data);
  });
});

describe("Pokemon.jsx", () => {
  it("utilizes React Test Renderer", async () => {
    const pokeAPIResponse = {
      data: {
        abilities: [],
        base_experience: 101,
        forms: [],
        game_indices: 20,
        height: 3,
        held_items: [],
        id: 132,
        is_default: true,
        location_area_encounters: "",
        moves: [
          { move: { name: "" } },
          { move: { name: "" } },
          { move: { name: "" } },
          { move: { name: "" } },
        ],
        name: "",
        order: 224,
        post_types: [],
        species: {},
        sprites: {},
        stats: [],
        types: [{ type: "" }],
        weight: 40,
      },
    };
    axios.get.mockResolvedValue(pokeAPIResponse);
    const testRenderer = ReactTestRenderer.create(
      <MemoryRouter>
        <Pokemon />
      </MemoryRouter>
    );

    // HOLDS AN H2 WITH 'Pokemon' AS INNER HTML
    expect(testRenderer.toJSON().children).toStrictEqual([
      { type: "h2", props: {}, children: ["Pokemon"] },
    ]);
  });
});
