import React, { useEffect, useState } from "react";
import { Box, Button } from '@mui/material';
import { CardService, TextCard, Buttons, ImgCard} from './styled';
import { CardContent } from '@mui/material';
import { goToDetails } from '../../router/coordinator'
import { useHistory } from "react-router-dom";
import { BASE_URL } from '../../constants/url'
import axios from "axios";

const Card = () => {
    const history = useHistory()
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get(BASE_URL)
            .then((response) => {
                response.data.results.map((result) => {
                    return axios.get(result.url)
                        .then((aux) => {

                            setPokemons(oldList => [...oldList, {
                                name: result.name,
                                url: result.url,
                                imagem: aux.data.sprites.front_default
                            }]);

                        }).catch((error) => {
                            console.log(error)
                        })
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                rowGap: 1,
                columnGap: 2

            }}>

            {pokemons.map((pokemom) => (
                <CardService key={pokemom.url}
                    sx={{
                        gridColumn: { xs: 'span 6', sm: 'span 2', md: 'span 2', lg: 'span 2', xl: 'span 1' },
                    }}>
                    
                        <ImgCard>
                            <img src={pokemom.imagem} alt={pokemom.name} />
                        </ImgCard>
                        <Buttons>
                            <Button>Adicionar a Pokédex</Button>
                            <Button onClick={() => goToDetails(history)}>Ver detalhes</Button>
                        </Buttons>
                    
                </CardService>
            ))}

        </Box>

    )
}
export default Card;
