import { combineReducers } from '@reduxjs/toolkit';
import pokemonsReducer from './pokemonsSlice';
import pokemonReducer from './pokemonSlice';

export default combineReducers({
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer
});
