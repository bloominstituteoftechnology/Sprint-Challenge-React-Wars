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

  // ======== pull from Star Wars people API ========
  const [character, setCharacter] = useState([]);
  const [characterPage, setCharacterPage] = useState(2)
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleChanges(event){
    setSearchTerm(event.target.value)
  };

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${characterPage}`)
      .then(response => {
        console.log(response.data.results)
        const results = response.data.results.filter(element => 
            element.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

        setSearchResults(results);
        setCharacter(response.data.results);
        
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });

  }, [searchTerm, characterPage]);
  
  // ======== pull from Star Wars starships API ========
  const [ship, setShip] = useState([]);
  const [page, setPage] = useState(2)
  const [ shipSearch, setShipSearch] = useState("");
  const [shipResult, setShipResults] = useState([]);

  function handleShipChanges(event){
    setShipSearch(event.target.value)
  };

  useEffect(() => {
    axios
    .get(`https://swapi.co/api/starships/?page=${page}`)
    .then(response => {
      const lowerCaseShips = response.data.results.filter(element => 
          element.name.toLowerCase().includes(shipSearch.toLowerCase())
          );
        setShipResults(lowerCaseShips);
        setShip(response.data.results);

  }).catch(error => {
      console.log("The data was not returned", error);
  })

  }, [shipSearch, page]);

  return (
    <CardContainer>
        <section>
        <h3>Characters</h3>
        <button onClick={() => setCharacterPage(1)}>1</button>
        <button onClick={() => setCharacterPage(2)}>2</button>
        <button onClick={() => setCharacterPage(3)}>3</button>
        <button onClick={() => setCharacterPage(4)}>4</button>
        <br></br>
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
        <h3>Ships</h3>
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
        <br></br>
        <input 
          type="text"
          placeholder="Search"
          value={shipSearch}
          onChange={handleShipChanges}
        />
      {shipResult.map((whip, index) => (
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