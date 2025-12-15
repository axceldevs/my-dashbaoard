import { PokemonsGrid } from "@/pokemons/components/PokemonsGrid";
import { PokemonsResponse } from "@/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  //throw new Error('Esto es un error que no debería de suceder');
  // throw notFound();

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="p-2 flex flex-col">
      <h1 className="text-5xl font-extrabold my-4 text-center tracking-wide">
        Pokémon
        <span className="block text-xl text-red-600 font-semibold">
          Listado estático de Pokémon
        </span>
      </h1>

      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
