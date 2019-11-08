import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Container, Row } from 'reactstrap';


const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    // let arr = [];

    useEffect(() => {
        axios
            .get('https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/')
            .then(response => {
                // console.log(response.data.results);
                setCharacters(response.data.results);
            })
            .catch(error => {
                console.log('The requested data was not returned!', error);
            });
    }, []);

    return (
        <Container>
            <Row>
                {characters.map((character, index) => {
                    // arr.push ={index}
                    // console.log(arr)
                    return (
                        <CharacterCard
                            key={index}
                            name={character.name}
                            birth_year={character.birth_year}
                            eye_color={character.eye_color}
                            url={`https://starwars-visualguide.com/assets/img/characters/${index}.jpg`}
                            // release_date={character.release_date}
                        />
                    );
                })}
            </Row>
        </Container>
    );
}

export default CharacterList;