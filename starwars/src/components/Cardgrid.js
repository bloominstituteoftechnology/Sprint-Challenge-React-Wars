import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Col } from 'reactstrap';

import Cards from './Card';

const CardGrid = () => {
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
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

      <Col sm='12' md={{ size: 6, offset: 3}}>
        {characters.map(character => {
          return (
            <Cards
              name={character.name}
              height={character.height}
              mass={character.mass}
              hairColor={character.hair_color}
              eyeColor={character.eye_color}
              birthYear={character.birth_year}
              gender={character.gender}
            />
          );
        })}
      </Col>
    </Container>
  );
};

export default CardGrid;
