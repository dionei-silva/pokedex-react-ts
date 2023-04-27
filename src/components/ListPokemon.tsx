import { Grid } from '@mui/material';
import React from 'react';
import CardPokemon from './CardPokemon';
import PokemonType from '../types/PokemonType';
import { useNavigate } from 'react-router-dom';

interface ListPokemonProps {
  items: PokemonType[];
}

const ListPokemon: React.FC<ListPokemonProps> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      {items.map(item => (
        <Grid item xs={12} sm={3} key={item.id}>
          <CardPokemon onClick={() => navigate(`/detail/${item.id}`)} pokemon={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListPokemon;
