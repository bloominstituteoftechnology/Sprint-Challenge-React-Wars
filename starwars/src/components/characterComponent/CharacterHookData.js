import React, {useState, useEffect} from 'react';
import axios from "axios";
import CharacterHook from "./CharacterHook";

const CharacterHookData = () => {
    const [characters, setCharacter] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.py4e.com/api/people')
        .then(response => {
            console.log('the response in the hook', response)
            console.log('console data: ', response.data.results)
            setCharacter(response.data.results)
        })
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            {characters.map((character, index) => (
            <div key={index}>
                <CharacterHook id={character} character={character} />
            </div>
            ))
            
            }
        </div>
    )
}

export default CharacterHookData;