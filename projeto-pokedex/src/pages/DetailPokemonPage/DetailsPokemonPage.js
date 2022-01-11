import axios from 'axios'
import React, { useContext, useEffect, useState } from "react";
import { Body, CardType, CardLeft, CardRigth, CardImg, Img } from './styled';
import { GlobalContext } from '../../context/GlobalContext';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import LinearProgress from '@mui/material/LinearProgress'
import { BASE_URL } from '../../constants/url';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Header from '../../layout/Header';
import { goToHome } from '../../router/coordinator';
import { useHistory } from 'react-router-dom';

const DetailsPokemonPage = () => {
 const pokemonDetail = useParams()
 const history = useHistory()
 const [pokemon, setPokemon] = useState({})
 const { setters } = useContext(GlobalContext);

 useEffect(() => {
  setters.setTitle('')
  getDetails()
 }, [])

 const getDetails = () => {
  axios.get(`${BASE_URL}/pokemon/${pokemonDetail.name}`)
   .then((res) => {
    setPokemon(res.data)
   })
   .catch((err) => {
    console.log(err)
   })
 }
 return (
  <div>
   <Header title={""}
    leftButton={() => goToHome(history)}
    rightButton />
   {pokemon && pokemon.sprites && (
    <Body>
     <CardLeft>
      <CardImg>
       <Card >
        <CardContent>
         <Img src={pokemon.sprites.front_default} alt='foto de frente do pokemon' />
        </CardContent>
       </Card>
       <Card>
        <CardContent>
         <Img src={pokemon.sprites.back_default} alt='foto de costas do pokemon' />
        </CardContent>
       </Card>
      </CardImg>
      <Card>
       <CardContent>
        <List>
         <Typography align='center' variant='h5'>Status</Typography>
         {pokemon.stats && pokemon.stats.map((element) => {
          return (
           <ListItem>
            <ListItemText
             sx={{ width: 120 }}
             primary={element.stat.name}
            />
            <LinearProgress sx={{ width: 140, height: 6 }} variant="determinate" value={element.base_stat > 100 ? 100 : element.base_stat} />
            <ListItemText
             sx={{ marginLeft: 2 }}
             primary={element.base_stat}
            />
           </ListItem>
          )
         })}
        </List>
       </CardContent>
      </Card>
     </CardLeft>
     <CardRigth>
      <Card>
       <CardContent>
        <Typography align='center' variant='h5'>Tipos</Typography>
        {pokemon.types && pokemon.types.map((element) => {
         return <Typography variant="body1">{element.type.name}</Typography>
        })}
       </CardContent>
      </Card>
      <Card>
       <CardContent>
        <Typography align='center' variant='h5'>Ataques</Typography>
        {pokemon.moves && pokemon.moves.slice(0, 5).map((element) => {
         return <Typography variant="body1">{element.move.name}</Typography>
        })}
       </CardContent>
      </Card>
     </CardRigth>
    </Body>
   )}
  </div>
 )

}
export default DetailsPokemonPage;