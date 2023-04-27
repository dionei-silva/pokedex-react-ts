import React, { useEffect } from 'react';
import { Button, FormControl, Grid, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ContentPage from '../components/ContentPage';
import CardPokemon from '../components/CardPokemon';
import ListPokemon from '../components/ListPokemon';
import PokemonType from '../types/PokemonType';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPokemon, selectAll } from '../store/modules/pokemonsSlice';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemonsRedux = useAppSelector(selectAll);

  useEffect(() => {
    dispatch(getPokemon(5));
    dispatch(getPokemon(4));
    dispatch(getPokemon(6));
    dispatch(getPokemon(7));
  },[]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4">Pokedéx</Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Typography variant="body2">Pesquise seu pokemon pelo nome.</Typography>
      </Grid>
      <Grid item xs={11} textAlign="center">
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={'text'}
            startAdornment={
              <InputAdornment position="start">
                {' '}
                <SearchIcon />{' '}
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" sx={{ height: '100%' }}>
          <TuneIcon />
        </Button>
      </Grid>
      <Grid item xs={12}>
        {pokemonsRedux.length ? (
          <ContentPage>
            <ListPokemon items={pokemonsRedux} />
          </ContentPage>
        ) : (
          <Typography>Nenhum pokemon para mostrar.</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
