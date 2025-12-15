import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";

interface PokemonsGridProps {
  pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: PokemonsGridProps) => {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
