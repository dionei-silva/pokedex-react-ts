import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import PokemonType from '../../types/PokemonType';
import { doGet } from '../../services/pokemonApi';

const adapter = createEntityAdapter<PokemonType>({
  selectId: item => item.id
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.pokemons);

export const getPokemon = createAsyncThunk('pokemons/getPokemon', async (id: number) => {
  const response = await doGet(`/pokemon/${id}`);

  if (response) {
    response.image = response.sprites.other['official-artwork'].front_default;

    return response;
  }

  return [];
});

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne
  },
  extraReducers(builder) {
    builder.addCase(getPokemon.fulfilled, (state, action) => {
      adapter.addOne(state, action.payload);
    });
  }
});

export const { addOne, addMany, updateOne } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
