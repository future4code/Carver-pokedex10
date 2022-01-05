import axios from 'axios'
import React, { useEffect, useState } from "react";
import { Body, Card1, Card2, Card3, CardImg, Img } from './styled';

const DetailsPokemonPage = () => {
 const [pokemon, setPokemon] = useState({})

 useEffect(() => {
  getDetails()
 }, [])

 const getDetails = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/2/`)
   .then((res) => {
    setPokemon(res.data)
    console.log(res.data)
   })
   .catch((err) => {
    console.log(err)
   })
 }

 return (
  <div>
   {pokemon && pokemon.sprites && (
    <Body>
     <CardImg>
      <Img src={pokemon.sprites.front_default} alt='foto de frente do pokemon' />
      <Img src={pokemon.sprites.back_default} alt='foto de costas do pokemon' />
     </CardImg>
     <Card1>
      <ol>
       <li>vida:{pokemon.stats[0].base_stat}</li>
       <li>ataque:{pokemon.stats[1].base_stat}</li>
       <li>defesa:{pokemon.stats[2].base_stat}</li>
       <li>ataque especial:{pokemon.stats[3].base_stat}</li>
       <li>defesa especial:{pokemon.stats[4].base_stat}</li>
       <li>velocidade:{pokemon.stats[5].base_stat}</li>
      </ol>
     </Card1>
     <Card2>
      <ol>
       {pokemon.types.map((type) => {
        return <li>{type.type.name}</li>
       })}
      </ol>
     </Card2>
     <Card3>
      <h2>Poderes</h2>
      <ol>
       <li>{pokemon.moves[0].move.name}</li>
       <li>{pokemon.moves[1].move.name}</li>
       <li>{pokemon.moves[2].move.name}</li>
       <li>{pokemon.moves[3].move.name}</li>
       <li>{pokemon.moves[4].move.name}</li>
      </ol>
     </Card3>
    </Body>
   )}
  </div>
 )
}
export default DetailsPokemonPage;