import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";

const CardContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const CharCardCont = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setCharacter(response.data.results);
        // console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <CardContainer>
      {character.map((person, index) => (
        <CharacterCard
          key={index}
          name={person.name}
          birthyear={person.birth_year}
          height={person.height}
          mass={person.mass}
          hair={person.hair_color}
          eyes={person.eye_color}
          sex={person.gender}
        />
      ))}
      ))
    </CardContainer>
  );
};

export default CharCardCont;