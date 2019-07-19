import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CharacterCard from './CharacterCard.js';



function Characters () {

    const [characterData, setCharacterData] = useState();

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
    
        .then(res => {
            setCharacterData(res.data.results)
        })
        .catch(err => console.log(err));
    
    },[])

    console.log(characterData)

    if (!characterData){
        return <h1>Loading...</h1>
    }else {
        return (
            <div>
                {characterData.map((character, index) => <CharacterCard character={character} key={index} />)}
            </div>
        );
    }

        
}


export default Characters