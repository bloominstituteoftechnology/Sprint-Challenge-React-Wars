import React, { useEffect, useState } from "react";
import { Row, Container } from "reactstrap";
import axios from "axios";
import CharacterCard from "./characterCard";

const Characters = () => {
  const initialState = [];
  const [characters, setCharacters] = useState(initialState);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log("here is the response from the api", response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <Row>
        {characters.map(character => {
          {
            /* <h1>{character.name}</h1>
            <h2>{character.height}</h2> */
          }
          return (
            <CharacterCard
              name={character.name}
              height={character.height}
              weight={character.mass}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Characters;
