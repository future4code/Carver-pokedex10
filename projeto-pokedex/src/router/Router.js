import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/HomePage'
import DetailsPokemom from '../pages/DetailsPokemonPage'
import Pokedex from '../pages/PokedexPage'

const Router = () => {

 return (
  <BrowserRouter>
   <Switch>
    <Route exact path="/">
     <Home />
    </Route>
    <Route exact path="/pokedex">
     <Pokedex />
    </Route>
    <Route exact path={`/details/:id`}>
     <DetailsPokemom />
    </Route>
    <Route>
     <div>Erro: página não encontrada</div>
    </Route>
   </Switch>
  </BrowserRouter>
 );
};

export default Router;