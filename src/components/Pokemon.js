import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Pokemon.scss'


const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [response, setResponse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPokemons = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?offset=1&limit=150')
      .then(response => {
        setResponse(response);
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    if (response) {
      setPokemons(response.data.results);
    }
  }, [response]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.includes(searchTerm);
  });

  return (
    <div className='container-pokemon'>
            <input type="text" placeholder="Search for a Pokémon" value={searchTerm} onChange={handleSearchTermChange} />

      <ul className='ul-poke'>
        {filteredPokemons.map((pokemon) => (
          <li key={uuidv4()}>
            <img src={`https://pokesprite.net/sprites/generation-i/front/${pokemon.number}.png`} height="60" />
            <h2>Name: {pokemon.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;
