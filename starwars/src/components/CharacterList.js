import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Container, Row } from 'reactstrap';


const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

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
                {characters.map(character => {
                    console.log(character)
                    return (
                        <CharacterCard
                            key={character.name}
                            title={character.name}
                            // description={character.description}
                            // director={character.director}
                            // release_date={character.release_date}
                        />
                    );
                })}
            </Row>
        </Container>
    );
}

export default CharacterList;