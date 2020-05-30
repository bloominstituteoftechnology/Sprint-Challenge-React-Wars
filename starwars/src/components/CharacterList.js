import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';
import { Body } from './styles'

export default()=>{
    const [ characters, setCharacters ] =useState([]); 
    console.log({characters});

    useEffect(() =>{
        axios.get('http://swapi.py4e.com/api/people/')
        .then((response) =>{
            console.log (response.data.results)
            setCharacters(response.data.results)
        }) 
        .catch(err => {
            console.log(err);
        });
    },[])

    return(
        <Body>

            {characters.map(element => {
                console.log(characters)
                return <Character characters={element.name} height={element.height} birth_year={element.birth_year} eye_color={element.eye_color}/>
            })}
        </Body>

    )
}
