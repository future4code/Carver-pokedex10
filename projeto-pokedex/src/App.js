import React, { useState } from 'react'
import Router from './router/Router';
import Header from './layout/Header'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";
import { GlobalContext } from './context/GlobalContext';



function App() {
    const [pokemons, setPokemons] = useState([])
    const [title, setTitle] = useState('Lista de Pokémons')

    return (
        <GlobalContext.Provider value={{ pokemons, setPokemons, title, setTitle }}>
            <ThemeProvider theme={theme}>
                <Header title={title} />
                <Router />
            </ThemeProvider>

        </GlobalContext.Provider>
    );
}

export default App;
