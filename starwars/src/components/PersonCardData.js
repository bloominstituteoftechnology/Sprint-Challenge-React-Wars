import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Can use name, birth_year, gender, hair_color, height

const imgOfChar = styled.img`
    width: 30%;
`;

export const PersonCardCreator = ({ person }) => {
    const [personInfo, setPerson] = useState(person);
    console.log(personInfo);
    return (
        <div className ="personinfo">
            <h2>{person.name}</h2>
            <p>Birth year: {person.birth_year}</p>
            <p>Gender: {person.gender}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Height: {person.height}</p> 
        </div>
    )
}

// const determineBG = (name) => {

// }