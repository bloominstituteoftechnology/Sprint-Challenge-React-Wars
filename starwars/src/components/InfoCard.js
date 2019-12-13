import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    width: 100%;
    margin: 2%;
    background-color: #625B5A;
    border-radius: 5%;
`
const SWName = styled.h3`
    font-weight: bold;
`

const StyledInfo = styled.h5`
    color: white;
`


const InfoCard = props => {
    return (
        <Card>
            <SWName>{props.name}</SWName>
            <StyledInfo>Gender: {props.gender}</StyledInfo>
            <StyledInfo>Height: {props.height}cm</StyledInfo>
            <StyledInfo>Weight: {props.mass}kg</StyledInfo>            
        </Card>
    )
}

export default InfoCard


// gender={character.gender}
// height={character.height}
// mass={character.mass}
// homeworld={character.homeworld}