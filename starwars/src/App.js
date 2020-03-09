import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterCards from './components/CharacterCards';

import axios from 'axios';
import styled from 'styled-components';

const FancyDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starWarsData, setStarWarsData] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/').then(response => {
      setStarWarsData(response.data.results);
    });
  }, []);

  console.log(starWarsData);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <FancyDiv className='CharacterCards'>
        {starWarsData.map((item, index) => {
          return <CharacterCards key={index} name={item.name} height={item.height} weight={item.mass} hair={item.hair_color} eye={item.eye_color} birthYear={item.birth_year} gender={item.gender} />
        })}
      </FancyDiv>
    </div>
  );
}

export default App;
