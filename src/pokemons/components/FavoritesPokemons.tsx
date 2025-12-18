"use client";

import { useAppSelector } from "@/store";
import { PokemonsGrid } from "./PokemonsGrid";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritesPokemons: SimplePokemon[] = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  const [pokemons] = useState(favoritesPokemons);

  return (
    <>
      {
        pokemons.length === 0
        ? <NoFavorites /> 
        : <PokemonsGrid pokemons={pokemons} />
      }
    </>
  );

  //<PokemonsGrid pokemons={favoritesPokemons} />;
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center gap-3">
      <IoHeartOutline className="text-red-500 w-24 h-24 opacity-80" />

      <h2 className="text-xl font-semibold text-gray-700">
        No tienes favoritos aún
      </h2>

      <p className="text-sm text-gray-500 max-w-xs">
        Marca tus Pokémon favoritos y aparecerán aquí
      </p>
    </div>
  );
};
