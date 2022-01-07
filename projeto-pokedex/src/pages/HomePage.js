import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from '../components/Card/Card'
import { Box } from '@mui/material';
import { GlobalContext } from "../context/GlobalContext";
import Header from "../layout/Header";
import { goToPokedex } from "../router/coordinator";
import { goToDetails } from "../router/coordinator";


const HomePage = () => {

 const history = useHistory()
 const { states, setters, requests } = useContext(GlobalContext);


 useEffect(() => {
  setters.setTitle('Lista de Pokémons')
 }, [])

 return (
  <div>
   <Header title={'Lista de Pokémons'}
    leftButton={() => goToPokedex(history)} />
   <Box
    sx={{
     display: 'grid',
     gridTemplateColumns: 'repeat(6, 1fr)',
     rowGap: 1,
     columnGap: 2
    }}>
    {states.pokemons
     .sort(function (a, b) {
      return a.name.localeCompare(b.name)
     })
     .map((pokemon) => (
      <Card
       key={pokemon.url}
       pokemon={pokemon}
       history={history}
       goToDetails={goToDetails}
       button={"adicionar a pokédex"}
      />
     ))}
   </Box>
  </div>
 )
}
export default HomePage;