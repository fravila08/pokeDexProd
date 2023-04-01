import { useState } from "react";
import "./App.css";
import { Home } from "./Pages/Home";
import { Pokemon } from "./Pages/Pokemon";
import { PokemonTeam } from "./Pages/PokemonTeam";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header caughtPokemon={caughtPokemon} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/pokemon/:id/"
              element={
                <Pokemon
                  caughtPokemon={caughtPokemon}
                  setCaughtPokemon={setCaughtPokemon}
                />
              }
            />
            <Route
              path="/team/"
              element={
                <PokemonTeam
                  caughtPokemon={caughtPokemon}
                  setCaughtPokemon={setCaughtPokemon}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
