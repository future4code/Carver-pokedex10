import styled from 'styled-components'

export const Body = styled.div`
padding-top:1%;
display:flex;
flex-wrap: wrap;
justify-content: space-evenly;
@media only screen and (max-width: 600px) {
 flex-direction: column;
align-items: center;
}
`
export const CardLeft = styled.div`
width: 40%;
max-width:100vw;
min-width: 60vw;
display:flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
justify-content: space-evenly;

`
export const CardImg = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
flex-wrap: wrap;
height: 100%;
@media only screen and (max-width: 900px) {
flex-wrap: nowrap;
flex-direction: row;
align-items: center;
}
`
export const CardType = styled.div`

`
export const CardRigth = styled.div`
width: 30%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
export const Img = styled.img`

`