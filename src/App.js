import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState({});

  const showPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    showPokemon();
  }, []);

  console.log();

  return (
    <>
      <h1>{pokemon && pokemon.name?.toUpperCase()}</h1>
      <img
        src={pokemon && pokemon.sprites?.other.dream_world.front_default}
        alt="pokemon img"
      />
    </>
  );
}

export default App;
