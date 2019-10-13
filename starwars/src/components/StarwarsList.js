import React, { useEffect, useState } from "react";
import axios from "axios";
import StarwarsCard from "./StarwarsCard";
import { Container, Row} from 'reactstrap';
export default function StarwarsList() {
  // NOTE: The value given to useState() must be of the same type as your vale is expected to be
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log("Star Wars People", response.data);
        setPeople(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
   <Container>
     <Row>
      {people.map(person => {
        return (
          <StarwarsCard
            key={person.id}
            title={person.title}
            description={person.description}
            director={person.director}
            release_date={person.release_date}
          />
        );
      })}
      </Row>
  </Container>
  );
}