import React from "react";
import styled from "styled-components";


const CharDiv = styled.div`
    width: 25%;
    border-radius: 15px;
    border-style: solid;
    border-color: lightblue; 
    background: rgba(255,255,255,0.90);
    box-shadow: 5px 10px black;
    margin: 30px;
    padding-bottom: 10px;
`

const CharName = styled.h2`
    color: orange;
`

const CharInfo = styled.h3`
    color: lightblue;
`

const CharacterCard = (props) => {
    //Props come from Character.js
    return (

        <CharDiv>
            <CharName>- {props.name} -</CharName>
            <CharInfo>Homeworld: </CharInfo>{props.location.name}
            <CharInfo>Status: </CharInfo>{props.status}
            <CharInfo>Gender: </CharInfo>{props.gender}
            <CharInfo>Species: </CharInfo>{props.species}
        </CharDiv>
    );
}

export default CharacterCard;