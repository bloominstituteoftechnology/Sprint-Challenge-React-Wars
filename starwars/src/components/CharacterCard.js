import React from "react";
import styled from "styled-components";


const CharDiv = styled.div`
    width: 350px;
    border-radius: 25px;
    border-style: solid;
    border-color: blue; 
    background: rgba(25,255,255,0.75);
    box-shadow: 5px 10px black;
    margin: 50px;
    padding-bottom: 20px;
`

const CharName = styled.h2`
color: green;
text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18
`

const CharInfo = styled.h3`
    color: white;
    text-shadow: 1px 1px 5px black;
`

const CharacterCard = (props) => {
    //Props come from Character.js
    return (
            
        <CharDiv>
            {props.next}
            <CharName>- {props.name} -</CharName>
            <CharInfo>Homeworld: </CharInfo>{props.location.name}
            <CharInfo>Status: </CharInfo>{props.status}
            <CharInfo>Gender: </CharInfo>{props.gender}
            <CharInfo>Species: </CharInfo>{props.species}
            <CharInfo>MugShot: </CharInfo><img src={props.image} alt= "char img"/>
        </CharDiv>
    );
}

export default CharacterCard;