import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";

import InfoCard from "./InfoCard";

const CardContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 10px;
`;


const SWCard = () => {
    const [swcharacters, setSWCharacters] = useState([]);


    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people`)
            .then(response => {
                console.log(`successful request = `, response);
                // console.log(`object value`, Object.values(peeps))
                setSWCharacters(response.data.results)
                
                
            })
            .catch(error => {
                console.log(`Error is: `, error);
            });
        }, [])

    
    return (
        
        <CardContainer>
            {swcharacters.map((character, index) => {
                return (
                    <InfoCard 
                    key={index}
                    name={character.name}
                    gender={character.gender}
                    height={character.height}
                    mass={character.mass} />
                );
            })} 
        </CardContainer>
    )
}

export default SWCard