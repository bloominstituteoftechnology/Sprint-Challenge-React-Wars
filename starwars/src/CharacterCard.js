import React from 'react';
import styled from 'styled-components';

const CharCardDiv = styled.div`
    width: 18%;
    height: 20%;
    margin-top:10px;
    background-color:white;
    border: 1px solid black;
    border-radius: 10px;
    padding-bottom: 10px;
`;
const CharacterCard = props =>{
    return(
        <CharCardDiv>
            <h3>Name:{props.charData.name}</h3>
            Height: {props.charData.height}cm<br/>
            Weight: {props.charData.mass}kg<br/>
            Hair Color: {props.charData.hair_color}<br/>
            Skin Color: {props.charData.skin_color}<br/>
            Eye Color: {props.charData.eye_color}<br/>
            Birth Year: {props.charData.birth_year}<br/>
            Gender: {props.charData.gender}
        </CharCardDiv>
    )
}
export default CharacterCard;