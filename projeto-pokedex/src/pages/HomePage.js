import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from '../components/Card/Card'

import { GlobalContext } from "../context/GlobalContext";
import Header from "../layout/Header";
import { goToPokedex } from "../router/coordinator";


const HomePage = () => {
 const history = useHistory()
 const { setters } = useContext(GlobalContext);

 useEffect(() => {
  setters.setTitle('Lista de Pokémons')
 }, [])

 return (
  <div>
   <Header title={'Lista de Pokémons'}
    leftButton={() => goToPokedex(history)} />
   <Card />
  </div>
 )
}
export default HomePage;