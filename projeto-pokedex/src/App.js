import React, { useState } from 'react'
import Router from './router/Router';
import Header from './layout/Header'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";
import { GlobalContext } from './context/GlobalContext';



function App() {

 const [pokemons, setPokemons] = useState([])
 const [pokemonDetail, setPokemonDetail] = useState("https://pokeapi.co/api/v2/pokemon/1/")

 const states = {pokemons, pokemonDetail}
 const setters = {setPokemons, setPokemonDetail}
 const requests = {}
 return (
  <GlobalContext.Provider value={{ states, setters }}>
   <ThemeProvider theme={theme}>
    <Header />
    <Router />
   </ThemeProvider>


  </GlobalContext.Provider>
 );
}

export default App;
