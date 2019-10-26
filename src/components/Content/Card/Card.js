import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
color: black;
background: white;
width: 70%;
margin: 1em;
border-radius: 10px;

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
                <p>Height: {props.height==='unknown'? 'Unknown' :`${props.height} Cm`}</p>
                <p>Weight: {props.weight==='unknown'? 'Unknown' :`${props.weight} Kg`}</p>
                <p>Gender: {props.gender == 'n/a' ? '??' :props.gender.charAt(0).toUpperCase()}</p>
            </Stats>
            
        </CardDiv>
    );
}

export default Card;
