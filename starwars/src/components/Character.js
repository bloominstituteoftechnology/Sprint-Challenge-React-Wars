import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FirstDiv = styled.div`
    width:80%;
    margin: 0 auto;
    background-color: whitesmoke;
    opacity: .5;
    box-shadow:2px 2px black;
    border-radius: 5px;
`;

const Name = styled.h2`
    color:darkred;
    opacity:100%;
    font-weight: bold`;

const Attribute = styled.p`
        color:darkred;
        font-weight:bolder`;

const Character = (props) => {
    console.log('from Character', props)

    return (
        <FirstDiv>
            <Name>NAME: {props.character}</Name>
            <Attribute>Gender: {props.gender}</Attribute>
            <Attribute>Eye Color: {props.eyes}</Attribute>
            <Attribute>Hair Color: {props.hair}</Attribute>
        </FirstDiv>
    )
}

export default Character;

