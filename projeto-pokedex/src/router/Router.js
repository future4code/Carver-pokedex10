import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/HomePage'
import DetailsPokemon from '../pages/DetailPokemonPage/DetailsPokemonPage'
import Pokedex from '../pages/PokedexPage'

const Router = () => {


 return (
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path={`/details/:name`} component={DetailsPokemon} />
    <Route exact path="/pokedex" component={Pokedex} />
    <Route>
     <div>Erro: página não encontrada</div>
    </Route>
   </Switch>
  </BrowserRouter>
 );

};

export default Router;