import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({
  pokemons,
}: {
  pokemons: {
    name: string;
    sprites: any;
    front_default: string;
    abilities: { ability: { name: string; url: string } }[];
    id: string;
    favorite: boolean;
  }[];
}) => {
  return (
    <div className="PokemonList">
      {Array.isArray(pokemons) &&
        pokemons.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            img={pokemon.sprites.front_default}
            abilities={pokemon.abilities}
            key={pokemon.name}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
