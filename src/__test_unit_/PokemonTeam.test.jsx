import { describe, it, expect } from "vitest";
import ReactTestRenderer from "react-test-renderer";
import { PokemonTeam } from "../Pages/PokemonTeam";
import { MemoryRouter } from "react-router-dom";

describe("PokemonTeam.jsx", () => {
  it("utilizes Testrenderer", () => {
    let caughtPokemon = [{}, {}, {}];
    const setCaughtPokemon = (val) => {
      caughtPokemon = val;
    };
    const pokemonTeam = ReactTestRenderer.create(
      <MemoryRouter>
        <PokemonTeam
          caughtPokemon={caughtPokemon}
          setCaughtPokemo={setCaughtPokemon}
        />
      </MemoryRouter>
    );
    const header = pokemonTeam.toJSON().children[0];
    let numberOfCards = pokemonTeam
      .toJSON()
      .children[1].children.filter((ele) => ele.props.className === "card");
    // HOLDS AN H2 ELEMENT WITH THE INNER HTML OF 'MY POKEMON TEAM'
    expect(header).toStrictEqual({
      type: "h2",
      props: {},
      children: ["MY POKEMON TEAM"],
    });
    // RENDERS A CARD FOR EACH POKEMON CAUGHT
    expect(numberOfCards.length).toBe(3);
  });

  it('will render "my team" without caught pokemon', () => {
    let caughtPokemon = [];
    const setCaughtPokemon = (val) => {
      caughtPokemon = val;
    };
    const pokemonTeam = ReactTestRenderer.create(
      <MemoryRouter>
        <PokemonTeam
          caughtPokemon={caughtPokemon}
          setCaughtPokemo={setCaughtPokemon}
        />
      </MemoryRouter>
    );

    const noPokemonHeader = pokemonTeam.toJSON().children[1].children[0];
    // RENDERS AN H3 ELEMENT WITH 'YOU DON'T HAVE ANY POKEMON' AS INNER HTML
    expect(noPokemonHeader).toStrictEqual({
      type: "h3",
      props: {},
      children: ["YOU DON'T HAVE ANY POKEMON"],
    });
  });
});
