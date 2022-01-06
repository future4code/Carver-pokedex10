import axios from 'axios'
import React, { useContext, useEffect, useState } from "react";
import { Body, CardStatus, CardLeft, CardRigth, CardTypes, CardAttacks, CardImg, Img } from './styled';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import LinearProgress from '@mui/material/LinearProgress'
import { BASE_URL } from '../../constants/url';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const DetailsPokemonPage = () => {
 const [pokemon, setPokemon] = useState({})
 const pokemonDetail = useParams()

 useEffect(() => {
  getDetails()
 }, [])

 const getDetails = () => {
  axios.get(`${BASE_URL}${pokemonDetail.name}`)
   .then((res) => {
    setPokemon(res.data)
   })
   .catch((err) => {
    console.log(err)
   })
 }
 return (
  <div>

   {pokemon && pokemon.sprites && (
    <Body>
     <CardLeft>
      <CardImg>
       <Img src={pokemon.sprites.front_default} alt='foto de frente do pokemon' />
       <Img src={pokemon.sprites.back_default} alt='foto de costas do pokemon' />
      </CardImg>

      <CardStatus>
       <List>
        {pokemon.stats && pokemon.stats.map((element) => {
         return (
          <ListItem alignItems='flex-start'>
           <ListItemText
            sx={{ width: 120 }}
            primary={element.stat.name}
           />
           <LinearProgress sx={{ width: 140, height: 6 }} variant="determinate" value={element.base_stat > 100 ? 100 : element.base_stat} />
           <ListItemText
            sx={{ marginLeft: 2 }}
            primary={element.base_stat}
           />
          </ListItem>
         )
        })}
       </List>
      </CardStatus>
     </CardLeft>
     <CardRigth>
      <CardTypes>
       {pokemon.types && pokemon.types.map((element) => {
        return <Typography variant="body1">{element.type.name}</Typography>
       })}
      </CardTypes>
      <CardAttacks>
       <Typography align='center' variant='h5'>Poderes</Typography>
       {pokemon.moves && pokemon.moves.slice(0, 5).map((element) => {
        return <Typography variant="body1">{element.move.name}</Typography>
       })}
      </CardAttacks>
     </CardRigth>
    </Body>
   )}
  </div>
 )
}
export default DetailsPokemonPage;