import React from 'react'
import { Body, Card1, Card2, Card3, CardImg } from './styled';

const Details = () => {
    return (
        <Body>
            <CardImg>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png'} alt='' />
            </CardImg>
            <CardImg>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'} alt='' />

            </CardImg>
            <Card1>
                <p>Poderes</p>
            </Card1>
            <Card2>
                <p>owjeowieoi</p>
            </Card2>
            <Card3>
                <p>Principais Ataques</p>
            </Card3>
        </Body>
    )
}
export default Details;