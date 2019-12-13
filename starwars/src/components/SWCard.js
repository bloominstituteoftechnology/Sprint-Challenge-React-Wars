import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";

import InfoCard from "./InfoCard";

const [swcharacters, setSWCharacters] = useState([]);


const SWCard = () => {
    

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people`)
            .then(response => {
                console.log(`PEEPS = `, peeps);
                // console.log(`object value`, Object.values(peeps))
                setSWCharacters(response.results)

            })
            .catch(error => {
                console.log(`Error is: `, error);
            });
        }, [])

    
    return (
        <InfoCard name={swcharacters.name}/>
    )

}

export default SWCard