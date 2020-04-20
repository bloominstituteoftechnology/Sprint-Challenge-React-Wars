import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';
import { Container, Row, Col } from 'reactstrap';

const CharacterList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then((res) => {
            console.log(res.data);
            setCharacters(res.data.results);
        })
        .catch((err) => {
          console.log("Error", err);
        })
  
    },[]);

    return (

    <div>   
            {characters.map(char => {
                return (
                    <Character 
                    key={char.id}
                    name={char.name}
                    pic={char.image}
                    episode={char.episode}
                    location={char.location}
                    status={char.status}
                    />
                )
            })}
            
    </div>
    )
        }

export default CharacterList;