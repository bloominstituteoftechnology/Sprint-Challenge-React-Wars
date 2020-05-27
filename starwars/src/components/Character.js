import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterContainer from './CharacterContainer.js'

const Character = () => {
    const [character, setCharacter] = useState([]);

    useEffect (() => {
        axios
        .get("https://rickandmortyapi.com/api/character/")
        // .get("https://superheroapi.com/api/10223217725980235/id")
        .then(response => {
            console.log(response)
            setCharacter(response.data.results);
        })
        .catch(error => console.log("Wubba lubba dub dub!", error));
    }, []);

    return (
        <div>
            {character.map(character => {
                return(<CharacterContainer key={character.id} image={character.image} name={character.name} status={character.status} species={character.species} gender={character.gender} />)
            })}     
        </div>
    );
    
    
};

export default Character;
