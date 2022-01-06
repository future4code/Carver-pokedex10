import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Pokedex from "../components/Pokedex/Pokedex";
import Header from "../layout/Header";
import { goToHome } from "../router/coordinator";
import { useHistory } from "react-router-dom";

const PokedexPage = () => {
    const history = useHistory()
    const { setTitle } = useContext(GlobalContext)

    useEffect(() => {
        setTitle('POKÉDEX')
    }, [])

    return (
        <div>
            <Header title={'POKÉDEX'}
                leftButton={() => goToHome(history)} />
            <Pokedex />
        </div>
    )
}
export default PokedexPage;