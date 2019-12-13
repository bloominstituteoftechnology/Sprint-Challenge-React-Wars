import React, { useState, useEffect } from 'react';
import { PersonCardCreator } from './PersonCardData';
import './PersonCard.css';
import styled from 'styled-components';

const StyledCard = styled.div`
    background-color: white;
    width: 60%;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 40px;
    margin-bottom: 20px;
`;

export const PersonCard = ({ person }) => {
    const [personInfo, setPerson] = useState(person);
    console.log(personInfo);
    return (
    <StyledCard>
        <PersonCardCreator person={personInfo} />
    </StyledCard>
    );
}