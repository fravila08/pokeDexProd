import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const getPokemon = async () => {
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30`);
  return response.data.results;
};

export const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getMyPokemon = async () => {
      setPokemon(await getPokemon());
    };
    getMyPokemon();
  }, []);

  return (
    <ol>
      <h2>Home</h2>
      {pokemon.map((poke, idx) => (
        <li key={idx}>
          <Link to={`/pokemon/${idx + 1}/`}>{poke.name}</Link>
        </li>
      ))}
    </ol>
  );
};
