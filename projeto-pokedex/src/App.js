import React, { useState } from 'react'
import Router from './router/Router';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";
import { GlobalContext } from './context/GlobalContext';


function App() {
    const [pokemons, setPokemons] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState("https://pokeapi.co/api/v2/pokemon/1/")
    const states = { pokemons, pokemonDetail }
    const setters = { setPokemons, setPokemonDetail }
    const [title, setTitle] = useState('')

    //const requests = {}

    return (
        <GlobalContext.Provider value={{ states, setters, title, setTitle}}>
            <ThemeProvider theme={theme}>
                <Router />
            </ThemeProvider>
        </GlobalContext.Provider>
    );
}

export default App;
