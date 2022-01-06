import axios from 'axios'
import React, { useContext, useEffect, useState } from "react";
import { Body, CardStatus, CardTypes, CardAttacks, CardImg, Img, StatusLine } from './styled';
import { GlobalContext } from "../../context/GlobalContext";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import LinearProgress from '@mui/material/LinearProgress'

const DetailsPokemonPage = () => {
 const [pokemon, setPokemon] = useState({})
 const { states, setters } = useContext(GlobalContext);

 useEffect(() => {
  getDetails()
 }, [])

 const getDetails = () => {
  axios.get(`${states.pokemonDetail}`)
   .then((res) => {
    setPokemon(res.data)
   })
   .catch((err) => {
    console.log(err)
   })
 }
 console.log(states.pokemonDetail)
 return (
  <div>

   {pokemon && pokemon.sprites && (
    <Body>
     <CardImg>
      <Img src={pokemon.sprites.front_default} alt='foto de frente do pokemon' />
      <Img src={pokemon.sprites.back_default} alt='foto de costas do pokemon' />
     </CardImg>

     <CardStatus>
      <List>
       {pokemon.stats && pokemon.stats.map((element) => {
        return (
         <ListItem>
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
     <CardTypes>
      {pokemon.types && pokemon.types.map((element) => {
       return <p>{element.type.name}</p>
      })}
     </CardTypes>
     <CardAttacks>
      <h2>Poderes</h2>
      {pokemon.moves && pokemon.moves.slice(0, 5).map((element) => {
       return <p>{element.move.name}</p>
      })}
     </CardAttacks>
    </Body>
   )}
  </div>
 )
}
export default DetailsPokemonPage;