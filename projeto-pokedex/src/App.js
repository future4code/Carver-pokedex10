import React from 'react'
import Router from './router/Router';
import Header from './layout/Header'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";


function App() {
 return (
  <ThemeProvider theme={theme}>
   <Header />
   <Router />
  </ThemeProvider>
 );
}

export default App;
