import styled from 'styled-components'

export const Body = styled.div`
height: 80vh;
margin: 20px 10vw;
display: flex;
justify-content: space-evenly;
@media (max-width: 1024px){ 
 margin: 5vh 5vh 0 5vh ;
 width: 100%;
 flex-direction: column
}
`
export const CardLeft = styled.div`
display:flex;
justify-content:space-evenly;
@media (max-width: 1024px){ 
 width: 30vh;
 display: flex;
 flex-direction: column
}
`
export const CardImg = styled.div`
height: 25vh;
display: flex;
flex-direction: column;
@media (max-width: 785px){ 
 flex-direction: row;
 height: 15vh;
}
`
export const CardRigth = styled.div`
width: 50vh;
display:flex;
flex-direction: column;
justify-content: space-between;
@media (max-width: 785px){ 
 width: 30vh;
 flex-direction: column;
 margin-top:2vh;
}
`
export const Img = styled.img`
width: 25vh;
margin: 10vh 5vh 0 0;
background: rgb(241, 241, 241);
@media (max-width: 785px){ 
 margin:2vh;
}
`
export const CardStatus = styled.div`
background: rgb(241, 241, 241);
align-self: center;
height: 75%;
width: 300px;
display: flex;
flex-direction: column;
justify-content: space-around;
padding-left: 20px;
@media (max-width: 785px){ 
 width:100%;
 margin:2vh 0 0 0 ;
 align-items: center
}
`
export const StatusLine = styled.div`
display: flex;
@media (max-width: 785px){ 
 flex-direction: column
}
`
export const CardTypes = styled.div`
background: rgb(241, 241, 241);
height: 10%;
display: flex;
justify-content: space-around;
@media (max-width: 785px){ 
 flex-direction: column
}
`
export const CardAttacks = styled.div`
background: rgb(241, 241, 241);
height: 80%;
display: flex;
flex-direction: column;
justify-content: space-around;
padding-left: 20px;
@media (max-width: 785px){ 
 flex-direction: column
}
`