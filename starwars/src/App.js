import React, { useState, useEffect } from 'react';
import './App.css';
import Characters from './components/CharacterCard';
import Axios from 'axios';
import styled from 'styled-components';


const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    Axios.get('https://swapi.co/api/people/')
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => console.log('Something is failing!', error))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Wrap>
        {character.map(ch => 
          <Characters 
            name = {ch.name} 
            birthyear = {ch['birth_year']}
            gender = {ch['gender']}
            hair_color = {ch['hair_color']}
            height = {ch['height']} 
          />
        )}
      </Wrap>
    </div>
  );
}

export default App;
