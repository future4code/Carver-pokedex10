import React from "react";
import { Button } from '@mui/material';
import { CardService, TextCard, Buttons, GrupCards } from './styled';
import { CardContent } from '@mui/material';
import { goToDetails } from '../../router/coordinator'
import { useHistory } from "react-router-dom";

const Card = () => {
    const history = useHistory()

    return (
        <GrupCards>
            <CardContent>
                <CardService>
                    <TextCard>
                        <p>Foto</p>
                    </TextCard>
                    <Buttons>
                        <Button>Adicionar a Pokédex</Button>
                        <Button onClick={() => goToDetails(history)}>Ver detalhes</Button>
                    </Buttons>
                </CardService>
            </CardContent>
        </GrupCards>
    )
}
export default Card;
