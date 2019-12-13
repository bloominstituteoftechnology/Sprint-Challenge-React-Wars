import React from "react";   
import {Card} from "reactstrap";
import styled from "styled-components"

const StyledCardBody = styled.div`
    background-color: #eacec4;
    margin: 2%;
    max-width: 100%;
`;

const StyledCardText = styled.p`
    padding: 1%;
`;

const StyledTitle = styled.h1`
    background-color: #db7164;
`;

 
const MainCard = props => {
   return (
    <div className = "main-card">
        <Card>
            <StyledCardBody>
                <StyledTitle style={{fontSize: "2rem", padding: "1%"}}>Character Name: {props.name}</StyledTitle>
                <StyledCardText>Birth Year: {props.birth_year}</StyledCardText>
                <StyledCardText>Height: {props.height}</StyledCardText>
                <StyledCardText>Films: {props.films}</StyledCardText>
            </StyledCardBody>
        </Card>
    </div>
   );
}
export default MainCard