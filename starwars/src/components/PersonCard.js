import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    background: #dbd1b4;
    width: 400px;
    border-radius: 10px;
    margin-bottom: 20px;
    opacity: 0.8;
    color: #b7410e;
    box-shadow: 0 8px 6px -6px black;
    font-size: 1.4rem;

`;

const PersonCard = (props) => {
    return(
        <StyledCard>
            <h2>Name: {props.name}</h2>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hair_color}</p>
        </StyledCard>
    )
} 
export default PersonCard;
