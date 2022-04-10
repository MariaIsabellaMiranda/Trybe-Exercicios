// import './App.css';
import pokemons from './data';
import Pokedex from './pokedex';

function App() {
  return (
    <>
      <h1>Pokedex</h1>
      <Pokedex poke={pokemons} />
    </>
  );
};

export default App;
