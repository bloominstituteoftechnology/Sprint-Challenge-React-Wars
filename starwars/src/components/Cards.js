import React, {useState } from "react";
import styled from "styled-components";

const Card = styled.div`
    color: white;
    width: 400px;
    max-height: auto;
    margin-left: auto;
    margin-right: auto;
`;

const Explanation = styled.p`
    font-size: 20px;
    color: white;
    
`;

const Title = styled.h2`
    font-size: 26px;
    background: -webkit-linear-gradient(left, #303055, #6FC41C, #E5EC2E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:white;
`;

const CharacterImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: scale;
    flex-shrink: 2;
    border-radius: 10%;
`;

const Cards = props => {
    return (
        <Card>
            <Title>
                <h2>{props.name}</h2>
            </Title>    
                <CharacterImage src = {props.image} alt = "Rick and Morty Character"/>
                <Explanation>
                    <p>{props.origin}</p>
                    <p>{props.species}</p>
                    <p>{props.type}</p>
                    {/* <p>{props.episode}</p> */}
                </Explanation>
        </Card>
    );
};

export default Cards;