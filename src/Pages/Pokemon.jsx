import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonCard } from "../components/PokemonCard";

export const getPokemonDetails = async (id) => {
  try {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  } catch (err) {
    alert(err);
    return null;
  }
};

export const Pokemon = ({ caughtPokemon, setCaughtPokemon }) => {
  let { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const myPokemonDetails = async () => {
      setPokemonDetails(await getPokemonDetails(id));
    };
    myPokemonDetails();
  }, [id]);

  return (
    <div>
      <h2>Pokemon</h2>
      {pokemonDetails && (
        <PokemonCard
          type={pokemonDetails.types[0].type.name}
          pokemonImg={pokemonDetails.sprites.front_default}
          name={pokemonDetails.name}
          moveOne={pokemonDetails.moves[0].move.name}
          moveTwo={pokemonDetails.moves[1].move.name}
          moveThree={pokemonDetails.moves[2].move.name}
          moveFour={pokemonDetails.moves[3].move.name}
          caughtPokemon={caughtPokemon}
          setCaughtPokemon={setCaughtPokemon}
        />
      )}
    </div>
  );
};
