import { Chip, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import colorType from '../utils/colorType';
import PokemonType from '../types/PokemonType';

interface CardPokemonProps {
  pokemon: PokemonType;
  onClick: () => void;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon, onClick }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper
          onClick={onClick}
          elevation={0}
          sx={{
            cursor: 'pointer',
            backgroundColor: colorType['normal'].card,
            textAlign: 'center',
            borderRadius: '10px'
          }}
        >
          <img src={pokemon.image} alt={pokemon.name} width={200} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">{pokemon.id}</Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Chip
          sx={{ minWidth: '100px', backgroundColor: colorType['normal'].chip, border: 'none' }}
          label={pokemon.types[0].type.name}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">{pokemon.name}</Typography>
      </Grid>
    </Grid>
  );
};

export default CardPokemon;
