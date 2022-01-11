import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Header from "../layout/Header";
import { goToHome } from "../router/coordinator";
import { useHistory } from "react-router-dom";
import { goToDetails } from "../router/coordinator";
import Card from '../components/Card/Card'
import { Box } from '@mui/material';

const PokedexPage = () => {
 const history = useHistory()
 const { states, setters, requests } = useContext(GlobalContext);

 useEffect(() => {
  setters.setTitle('POKÉDEX')
 }, [])

 const delPokedex = (pokemon) => {
  const index = states.pokedex.findIndex((item) => item.name === pokemon.name)
  const newPokedex = [... states.pokedex]
  newPokedex.splice(index, 1);
  setters.setPokedex(newPokedex)

  const newPokemonsList = [...states.pokemons, pokemon]
  setters.setPokemons(newPokemonsList)
 }

 return (
  <div>
   <Header title={'POKÉDEX'}
    leftButton={() => goToHome(history)} />
   <Box
    sx={{
     display: 'grid',
     gridTemplateColumns: 'repeat(6, 1fr)',
     rowGap: 1,
     columnGap: 2
    }}>
   {states.pokedex
     .sort(function (a, b) {
      return a.name.localeCompare(b.name)
     })
     .map((pokemon) => (
      <Card
       key={pokemon.url}
       pokemon={pokemon}
       history={history}
       goToDetails={goToDetails}
       button={"retirar da pokédex"}
       pushPokedex={delPokedex}
      />
     ))}
   </Box>
  </div>
 )
}
export default PokedexPage;