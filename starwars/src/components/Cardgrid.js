import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, CardDeck } from 'reactstrap';

import Cards from './Card';

const CardGrid = () => {
  const [characters, setCharacters] = useState([]);
  // get api data via useeffect hook
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('the data was not return', error);
      });
  }, []);

  console.log(characters);

  return (
  <Container>
  
    <CardDeck xs = '12' sm = '12' md = '12' lg = '12' xl = '12' >
      {characters.map(character => {
        return (
          <Cards
            key={character.url}
            name={character.name}
            height={character.height}
            mass={character.mass}
            hairColor={character.hair_color}
            skinColor={character.skin_color}
            eyeColor={character.eye_color}
            birthYear={character.birth_year}
            gender={character.gender}
          />
        );
      })}
    </CardDeck>
    </Container>
  );
};

export default CardGrid;
