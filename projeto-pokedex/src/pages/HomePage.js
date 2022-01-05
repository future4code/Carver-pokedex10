import React, { useContext, useEffect } from "react";
import Card from '../components/Card/Card'
import { GlobalContext } from "../context/GlobalContext";


const HomePage = () => {
    const { setTitle } = useContext(GlobalContext)
    useEffect(() => {
        setTitle('Lista de Pokémons')
    }, [])

 return (
  <div>
   <Card />
  </div>
 )
}
export default HomePage;