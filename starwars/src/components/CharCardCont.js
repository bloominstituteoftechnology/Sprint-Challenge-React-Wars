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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleChanges(event){
    setSearchTerm(event.target.value)
  };

  // pull from Star Wars people API
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        const results = response.data.results.filter(element => 
            element.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

        setSearchResults(results);
        setCharacter(response.data.results);
        
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });

  }, [searchTerm]);
  
  // pull from Star Wars starships API
  useEffect(() => {
    axios
    .get("https://swapi.co/api/starships/")
    .then(response => {
        setShip(response.data.results);

  }).catch(error => {
      console.log("The data was not returned", error);
  })

  }, []);
  console.log(searchResults)

  return (
    <CardContainer>
        <section>
          <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChanges}
          />
      {searchResults.map((person, index) => (
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