import React, { useState, useEffect } from 'react';

export default function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [showPokemonInfo, setShowPokemonInfo] = useState(false);

  useEffect(() => {
    if (showPokemonInfo) {
      fetchPokemonList();
    }
  }, [showPokemonInfo]);

  const fetchPokemonList = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
    }
  };

  const handleButtonClick = () => {
    setShowPokemonInfo(true);
  };

  return (
    <div>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">API</h1>
        <h1 className="text-3xl font-bold mb-4 text-center">Pokemon</h1>
        <div className="flex justify-center items-end h-full">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={handleButtonClick}>
            Get pokemon dex
          </button>
        </div>
        {showPokemonInfo && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pokemonList.map((pokemon, index) => (
              <PokemonCard key={index} url={pokemon.url} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const PokemonCard = ({ url }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetchPokemonData();
  }, [url]);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { name, types, sprites, stats } = pokemonData;
  const type1 = types[0].type.name;
  const type2 = types[1] ? types[1].type.name : '';
  const hp = stats.find(stat => stat.stat.name === 'hp').base_stat;
  const attack = stats.find(stat => stat.stat.name === 'attack').base_stat;
  const defense = stats.find(stat => stat.stat.name === 'defense').base_stat;
  const specialAttack = stats.find(stat => stat.stat.name === 'special-attack').base_stat;
  const specialDefense = stats.find(stat => stat.stat.name === 'special-defense').base_stat;
  const speed = stats.find(stat => stat.stat.name === 'speed').base_stat;

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-lime-400">
      <div className="flex  ">
        <img src={sprites.front_default} alt={name} className=" max-w-xs bg-white" />
        <img src={sprites.back_default} alt={name} className=" max-w-xs bg-white" />
      </div>
      <div className=" mt-2">
        <h2 className="text-lg">
          <span className="font-bold">Name: </span>
          <span className="uppercase">{name}</span>
        </h2>
        <span className='font-bold'>Type 1: </span><span>{type1}</span>
        {type2 && <div><span className='font-bold'>Type 2: </span><span>{type2}</span></div>}
        <h2 className='text-lg font-bold '>Base stats:</h2>
        <div className=''>
          <p>hp= {hp}</p>
          <p>attack= {attack}</p>
          <p>defense= {defense}</p>
          <p>special-attack= {specialAttack}</p>
          <p>special-defense= {specialDefense}</p>
          <p>speed={speed}</p>
        </div>
      </div>
    </div>
  );
};
