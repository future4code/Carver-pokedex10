import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const PokedexPage = () => {
    const { setTitle } = useContext(GlobalContext)

    useEffect(() => {
        setTitle('POKÉDEX')
    }, [])
    
    return (
        <div>

        </div>
    )
}
export default PokedexPage;