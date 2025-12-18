import { FavoritePokemons } from "@/pokemons/components/FavoritesPokemons";

export default async function PokemonsPage() {

  return (
    <div className="p-2 flex flex-col">
      <h1 className="text-5xl font-extrabold my-4 text-center tracking-wide">
        Pokémon
        <span className="block text-xl text-red-600 font-semibold">
          Listado de Pokémons favoritos
        </span>
      </h1>
      <FavoritePokemons/>
    </div>
  );
}


