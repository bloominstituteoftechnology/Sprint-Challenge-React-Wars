import React, { useState, useEffect} from 'react';
import axios from 'axios';

const [character, setCharacter] = useState([]);

const Characters = (props) => {

    return (

    useEffect(() => {

        axios 
          .get('https://swapi.co/api/people/')
          .then(res => setCharacter(res.data.results))
          .catch(err => console.log(err))
      }, [])

    )}


    character.map(characters => {
      characterName={characters.results}
    })}

    export default Characters;