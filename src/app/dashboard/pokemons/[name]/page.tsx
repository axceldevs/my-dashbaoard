import { PokemonResponse } from "@/pokemon";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

interface PokemonPageProps {
  params: {
    name: string;
  };
}

export async function generateStaticParams(): Promise<
  { name: string }[]
> {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151",
    { next: { revalidate: 60 * 60 * 24 } }
  ).then((res) => res.json());

  return data.results.map((pokemon: { name: string }) => ({
    name: pokemon.name,
  }));
}

export async function generateMetadata({ params }: PokemonPageProps): Promise<Metadata>{
  const { id, name } = await getPokemonData(params.name);
  return {
    title: `Pokémon - ${name}`,
    description: `Detalles y estadísticas de ${name}, el Pokémon número ${id}.`,
  };
}

const getPokemonData = async (name: string): Promise<PokemonResponse> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    { next: { revalidate: 60 * 60 * 24 } }
  )
    .then((res) => {
      if(res.status === 404) {
        notFound();
      }
      return res.json();
    });

  return data;
};


export default async function PokemonPage({ params }: PokemonPageProps) {

  const pokemon = await getPokemonData(params.name);

  return (
        <div className="max-w-4xl mx-auto p-6">
      
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center gap-6">
        
        {/* Imagen */}
        <div className="relative w-48 h-48">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Info principal */}
        <div>
          <h1 className="text-4xl font-bold capitalize">
            {pokemon.name}
            <span className="ml-3 text-gray-500 text-2xl">
              #{pokemon.id}
            </span>
          </h1>

          {/* Tipos */}
          <div className="flex gap-2 mt-3">
            {pokemon.types.map((t) => (
              <span
                key={t.type.name}
                className="px-3 py-1 rounded-full text-sm font-medium bg-slate-200 capitalize"
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Contenido */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        {/* Stats */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-3">Stats</h2>

          <ul className="space-y-2">
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name} className="flex justify-between">
                <span className="capitalize">{stat.stat.name}</span>
                <span className="font-medium">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Información general */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-3">Información</h2>

          <ul className="space-y-2">
            <li>
              <strong>Altura:</strong> {pokemon.height / 10} m
            </li>
            <li>
              <strong>Peso:</strong> {pokemon.weight / 10} kg
            </li>
            <li>
              <strong>Experiencia base:</strong> {pokemon.base_experience}
            </li>
          </ul>
        </div>

        {/* Habilidades */}
        <div className="bg-white rounded-lg shadow p-4 md:col-span-2">
          <h2 className="text-xl font-semibold mb-3">Habilidades</h2>

          <div className="flex flex-wrap gap-2">
            {pokemon.abilities.map((ability) => (
              <span
                key={ability.ability?.name}
                className="px-3 py-1 rounded-md bg-slate-100 capitalize text-sm"
              >
                {ability.ability?.name}
                {ability.is_hidden && " (hidden)"}
              </span>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
