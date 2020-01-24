import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";
import ShipCard from "./ShipCard"

const CardContainer = styled.div`

    display: flex;
    justify-content: space-between;
`;

const CharCardCont = () => {
  const [character, setCharacter] = useState([]);
  const [ship, setShip] = useState([]);

  // pull from Star Wars people API
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setCharacter(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });

  }, []);
  
  // pull from Star Wars starships API
  useEffect(() => {
    axios
    .get("https://swapi.co/api/starships/")
    .then(response => {
        setShip(response.data.results);
      //  console.log(response.data.results);
  }).catch(error => {
      console.log("The data was not returned", error);
  })

  }, []);
  

  return (
    <CardContainer>
        <section>
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
      </section>
      <section>
      {ship.map((whip, index) => (
        <ShipCard 
         key={index}
         name={whip.name}
         model={whip.model}
         manufacturer={whip.manufacturer}
        />
    ))}
    </section>
    </CardContainer>
  );
};

export default CharCardCont;