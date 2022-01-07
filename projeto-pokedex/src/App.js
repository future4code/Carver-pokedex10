import React, { useState, useEffect } from 'react'
import Router from './router/Router';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";
import { GlobalContext } from './context/GlobalContext';
import { BASE_URL } from './constants/url';
import axios from "axios";

function App() {
 const [pokemons, setPokemons] = useState([])
 const [title, setTitle] = useState('')

 const states = { pokemons, title }
 const setters = { setPokemons, setTitle }
 const requests = { }

 useEffect(() => {
   axios.get(`${BASE_URL}/pokemon?offset=0&limit=20`)
    .then((response) => {
     response.data.results.map((result) => {
      return axios.get(result.url)
       .then((aux) => {
        setPokemons(oldList => [...oldList, {
         name: result.name,
         url: result.url,
         imagem: aux.data.sprites.front_default,
        }]);
       }).catch((error) => {
        console.log(error)
       })
     });
    })
    .catch((error) => {
     console.log(error)
    })
 }, []);


 return (
  <GlobalContext.Provider value={{ states, setters, requests }}>
   <ThemeProvider theme={theme}>
    <Router />
   </ThemeProvider>
  </GlobalContext.Provider>
 );

}

export default App;
