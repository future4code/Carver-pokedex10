import { CardContent } from '@mui/material'
import styled from 'styled-components'

export const CardService = styled(CardContent)`
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid orange;
border-radius: 10px;
margin: 10px;
padding: 0;

`
export const ImgCard = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    img{
        height:12rem;
        width: 170px;
    }

`
export const Buttons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 10px;
align-items: flex-start;
width: 90%;
 
`

export const GrupCards = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
margin: 10px;
padding: 10px;
width: 98%;

`