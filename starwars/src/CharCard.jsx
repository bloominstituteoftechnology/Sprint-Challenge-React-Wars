import React from 'react';
import styled from 'styled-components';

const CharHeader = styled.h1 `
background-color: silver;
color: black;
`
const Cards = styled.div `
background-color: grey;
color: white;
width: 500px;
margin-left: 33%;
`

const CharCard = props => {
    console.log(props.state)
    return (
        <Cards> 
            <CharHeader>Character</CharHeader>
            <h2>Name: {props.name}</h2>
            <h3>Birth Year: {props.birth}</h3>
        </Cards>
    )
}

export default CharCard;