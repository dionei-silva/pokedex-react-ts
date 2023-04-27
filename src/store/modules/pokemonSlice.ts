import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PokemonType from '../../types/PokemonType';
import { doGet } from '../../services/pokemonApi';

const initialState = {
  id: 0,
  image: '',
  name: '',
  types: ['']
};

export const getPokemonDetails = createAsyncThunk('pokemon/getPokemon', async (id: number) => {
  const response = await doGet(`/pokemon/${id}`);

  if (response) {
    response.image = response.sprites.other['official-artwork'].front_default;

    return response;
  }

  return {};
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    }
  },
  extraReducers(builder) {
    builder.addCase(getPokemonDetails.fulfilled, (state, action) => {
      console.log(action.payload);
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.types = action.payload.types.map((item: any) => item.type.name);
    });
  }
});

export const { create, clear } = pokemonSlice.actions;
export default pokemonSlice.reducer;
