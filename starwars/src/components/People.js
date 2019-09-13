import React from 'react'
import styled from "styled-components"

export const StyledH2 = styled.h2`
  font-size: 3em;
  text-align: center;
  color: darkred;
`;

const StyledH3 = styled.h3`
  font-size: 2em;
  text-align: center;
  color: beige;
`;

const Container = styled.div`
    border: 3px solid black;
    margin: 20px;
    background-color: orange;
    padding: 20px;
`;

const StyleP = styled.p`
    color: white;
    font-size: 2rem
`;

const People = (props) => {

return (     
<Container>
    <StyledH3 >{props.name} </StyledH3>
    
    <StyledH2>About Me</StyledH2>
        <StyleP>Eye Color: {props.eye}</StyleP>
        <StyleP>Birth Year: {props.birthday}</StyleP>
        <StyleP>Height: {props.height}</StyleP>

</Container>


)
}
export default People