import React, { useState } from 'react'
import Router from './router/Router';
import Header from './layout/Header'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";
import { GlobalContext } from './context/GlobalContext';



function App() {
    const [pokemons, setPokemons] = useState([])

    return (
        <GlobalContext.Provider value={{ pokemons, setPokemons }}>
            <ThemeProvider theme={theme}>
                <Header />
                <Router />
            </ThemeProvider>

        </GlobalContext.Provider>
    );
}

export default App;
