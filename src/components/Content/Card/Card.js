import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
color: black;
background: white;
width: 70%;
margin: 1em;

`
const Stats = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Card = (props) => {

    return (
        <CardDiv>
            <h1 className="name">{props.name}</h1>
            <Stats className="stats">
                <p>Height:{props.height} cm</p>
                <p>Weight: {props.weight} Kg</p>
                <p>Gender: {props.gender.charAt(0).toUpperCase()}</p>
            </Stats>
            
        </CardDiv>
    );
}

export default Card;
