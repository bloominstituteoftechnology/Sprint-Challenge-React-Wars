import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "./CharCard";
import { Container, Row } from "reactstrap";

export default function List() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        // console.log(response.data.results)
        setChars(response.data.results);
      })
      .catch(error => {
        console.log(`The data was not returned; ${error}`);
      });
  }, []);
  return (
    <Container style={{marginBottom: '5%'}}>
      <Row>
        {chars.map(char => {
          return (
            <CharCard
              key={char.index}
              name={char.name}
              homeworld={char.homeworld}
            />
          );
        })}
      </Row>
    </Container>
  );
}
