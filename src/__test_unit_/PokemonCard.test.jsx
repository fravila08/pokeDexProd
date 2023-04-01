import { describe, it, expect } from "vitest";
import {
  pickBackGroundColor,
  addOrDropPokemonToMyTeam,
} from "../components/PokemonCard";

describe("example()", () => {
  it("will return true if num is 5", () => {
    let num = 5;
    expect(num).toBe(5);
  });
});

describe("pickBackGroundColor()", () => {
  it("will return the correct color for each pokemon type", () => {
    let pokemonTypes = [
      "grass",
      "fire",
      "electric",
      "ground",
      "rock",
      "water",
      "dragon",
      "flying",
      "normal",
      "poison",
    ];
    let answerColors = [
      "green",
      "red",
      "yellow",
      "brown",
      "brown",
      "blue",
      "silver",
      "cyan",
      "gray",
      "purple",
    ];
    let testArr = [];

    for (let i = 0; i < pokemonTypes.length; i++) {
      testArr.push(pickBackGroundColor(pokemonTypes[i]));
    }

    expect(testArr).toStrictEqual(answerColors);
  });
});

describe("addOrDropPokemonToMyTeam()", () => {
  it("will add a pokemon dictionary or drop it without holding duplicates", () => {
    let caughtPokemon = [];
    const setCaughtPokemon = (val) => {
      caughtPokemon = val;
    };
    const pokemons = [
      { name: "squirtle" },
      { name: "pikachu" },
      { name: "charizard" },
      { name: "squirtle" },
    ];
    const answerPokemon = [{ name: "pikachu" }, { name: "charizard" }];

    pokemons.map((pokemon) => {
      addOrDropPokemonToMyTeam(pokemon, caughtPokemon, setCaughtPokemon);
    });

    expect(caughtPokemon).toStrictEqual(answerPokemon);
  });
});
