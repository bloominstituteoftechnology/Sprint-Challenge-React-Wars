import React from "react";
import styled from "styled-components";


const CharDiv = styled.div`
    width: 25%;
    border-radius: 15px;
    border-style: double solid;
    border-color: black; 
    background: #b0e0e6;
    background:rgba(255,255,255,0.5);
    box-shadow: 5px 10px gray;
    margin: 25px;
    padding-bottom: 10px;
`

const CharName = styled.h2`
    color: #c99912;
`

const CharInfo = styled.h3`
    color: #664d07;
`

const CharacterCard = (props) => {
    //Props come from Character.js
    return (

        <CharDiv>
            <CharName>- {props.name} -</CharName>
            <CharInfo>Status: </CharInfo>{props.status}
            <CharInfo>Gender: </CharInfo>{props.gender}
            <CharInfo>Species: </CharInfo>{props.species}
            <CharInfo>Homeworld: </CharInfo>{props.location.name}
        </CharDiv>
    );
}

export default CharacterCard;