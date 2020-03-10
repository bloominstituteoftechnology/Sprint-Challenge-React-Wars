
import React, { useState, useEffect} from 'react';
import axios from 'axios';

import CharacterProfile from './CharacterProfile';

const Characters = () => {

    const [character, setCharacter] = useState([]);

useEffect(() => {

  axios 
    .get('https://swapi.co/api/people/')
    .then(res => setCharacter(res.data.results))
    .catch(err => console.log(err))
}, [])

console.log("character data", character);

    return (
        character.map(characters => {

            return (  
                <CharacterProfile
                    name={characters.name}
                    height={characters.height}
                    mass={characters.mass}
                    hair_color={characters.hair_color}
                    skin_color={characters.skin_color}
                    eye_color={characters.eye_color}
                    birth_year={characters.birth_year}
                    gender={characters.gender}
                    homeworld={characters.homeworld}
                />  
              
            )
        }    
    )
)}   


export default Characters;