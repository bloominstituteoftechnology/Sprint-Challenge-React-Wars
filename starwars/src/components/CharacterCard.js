import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 300px;
    background: #e2e2e1;
    color: #eca637;
    margin: 20px;
  
`;

const CardTitle = styled.h3`
    margin-top: 5px;
    padding: 10px 0;
    font-size: 25px;
    color: #722120;
    
`;

const CardP = styled.p`
    color: #121b26;
    font-size: 18px;
`;

const CharacterCard = props =>{
    return (
        <Card>
            <CardTitle>{props.name}</CardTitle>
            <CardP>Gender: {props.gender}</CardP>
            <CardP>Height: {props.height}</CardP>
            <CardP>Mass: {props.mass}</CardP>
            <CardP>Skin Color: {props.skinColor}</CardP>
        </Card>
    );
}

export default CharacterCard;