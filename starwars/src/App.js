import React, { useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterCard from "./components/CharacterCard";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);


    useEffect(() => {
      async function FetchData() {
        try {
          const characterList = await axios.get(
            "https://swapi.co/api/people/"
          );
          console.log(characterList)
          setCharacters(characterList.data.results)
        } catch(err) {
          console.log(err);
        }
      }
      FetchData();
    }, []);

    const Container = styled.div`
      // display: flex;
      // justify-content: space-between;
    `;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        {characters.map((character, index) => {
          return(
            <CharacterCard 
            key={index} 
            name={character.name} 
            birthYear={character.birth_year} 
            eyeColor={character.eye_color}
             />
          );
        })}
      </Container>
    </div>
  );
};

export default App;