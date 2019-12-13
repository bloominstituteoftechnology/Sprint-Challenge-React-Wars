import React, { useState, useEffect } from 'react';
import axios from "axios";
// import styled from "styled-components";

import InfoCard from "./InfoCard";



const SWCard = () => {
    const [swcharacters, setSWCharacters] = useState([]);


    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people`)
            .then(response => {
                console.log(`successful request = `, response.data.results);
                // console.log(`object value`, Object.values(peeps))
                setSWCharacters(response.data.results)

            })
            .catch(error => {
                console.log(`Error is: `, error);
            });
        }, [])

    
    return (
        
        <div>
            {swcharacters.map((character, index) => {
                return (
                    <InfoCard 
                    key={index}
                    name={character.name} />
                );


            })}
            
        </div>
    )

}

export default SWCard