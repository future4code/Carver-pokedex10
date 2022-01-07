import React from "react";
import { Button } from '@mui/material';
import { CardService, Buttons, ImgCard } from './styled';

const Card = ({pokemon, history, goToDetails, button}) => {

 return (
  <CardService
   sx={{
    gridColumn: {
     xs: 'span 6',
     sm: 'span 2',
     md: 'span 2',
     lg: 'span 2',
     xl: 'span 1'
    },
   }}>

   <ImgCard>
    <img src={pokemon.imagem} alt={pokemon.name} />
   </ImgCard>
   <Buttons>
    <Button variant="text">{button}</Button>
    <Button
     variant="text"
     onClick={() => goToDetails(history, pokemon.name)}
    >Ver detalhes
    </Button>
   </Buttons>

  </CardService>
 )
}
export default Card;
