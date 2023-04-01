import { useState } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Header = ({caughtPokemon}) => {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h1> POKEDEX </h1>
      <Link to="/">Home</Link>
      <Link to="/team/">My Team #{caughtPokemon.length}</Link>
      <Form
        className="d-flex"
        onSubmit={(e) => [
          e.preventDefault(),
          (window.location.href = `/#/pokemon/${pokemonName}/`),
          setPokemonName(""),
        ]}
      >
        <Form.Control
          className="me-2"
          placeholder="search"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};
