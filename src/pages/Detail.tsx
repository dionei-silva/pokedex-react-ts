import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import ContentPage from '../components/ContentPage';
import colorType, { TColorType } from '../utils/colorType';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useDispatch } from 'react-redux';
import { getPokemonDetails } from '../store/modules/pokemonSlice';

const Detail: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  console.log(id);

  const pokemon = useAppSelector(state => state.pokemon);

  React.useEffect(() => {
    dispatch(getPokemonDetails(Number(id)));
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ContentPage>
          <Grid container spacing={4} minHeight="80vh">
            <Grid item container xs={12} sm={6}>
              <Grid item xs={12}>
                n {pokemon.id}
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" fontWeight="700" lineHeight="60px">
                  {pokemon.name}
                </Typography>
                <Box display="flex" justifyContent="space-between" gap={2}>
                  {pokemon.types.map(type => (
                    <Chip
                      key={type}
                      sx={{ minWidth: '100px', background: colorType[type as TColorType]?.chip, border: 'none' }}
                      label={type}
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} height="100%">
                <Paper sx={{ background: colorType[pokemon.types[0] as TColorType]?.card }}>
                  <img src={pokemon.image} />
                </Paper>
              </Grid>
            </Grid>

            <Grid item container xs={12} sm={6} alignContent="space-evenly">
              <Grid item xs={12} display="flex" justifyContent="space-between" color="#3A2F66">
                <Typography variant="body1" fontWeight="700">
                  Forms
                </Typography>
                <Typography variant="body1" fontWeight="700">
                  Detail
                </Typography>
                <Typography variant="body1" fontWeight="700">
                  Types
                </Typography>
                <Typography variant="body1" fontWeight="700">
                  Stats
                </Typography>
                <Typography variant="body1" fontWeight="700">
                  Wear
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent={{ xs: 'flex-start', sm: 'space-evenly' }}
                flexWrap="wrap"
                gap={{ xs: '10px 5px', sm: '10px 5px' }}
              >
                <Paper
                  sx={{
                    backgroundColor: colorType[pokemon.types[0] as TColorType]?.card
                  }}
                >
                  <img src={pokemon.image} height="80px" alt="" />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" fontWeight="700" lineHeight="60px">
                  Lorem ipsum
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita obcaecati maiores sed, fugit
                  voluptatibus dignissimos itaque excepturi! Dicta minima velit expedita incidunt dolore, eum,
                  exercitationem odit pariatur asperiores, tempora esse!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ContentPage>
      </Grid>
    </Grid>
  );
};

export default Detail;
