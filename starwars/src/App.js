import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Character';
import styled,  { keyframes } from 'styled-components';
import {lightSpeedIn } from 'react-animations';

let bounceAnimation = keyframes`${lightSpeedIn}`;

const BouncyDiv = styled.h1`
  animation: 20s ${bounceAnimation};
  text-align: center;
color: blue;
font-size:55px
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// const Header = styled.h1`
// text-align: center;
// color: black;

// `;

const App = () => {
  const [characters, setCharacters] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    
    .then(response  => {
      setCharacters(response.data.results)
    })
    .catch( err => console.log(err));
  }, []);


  return (
    <div className="App">
      <BouncyDiv className="Header">Star Wars</BouncyDiv>
      <StyledContainer>
        {characters.map(characters => <Characters props={characters} />)}
      </StyledContainer>
    </div>
  );
}

export default App;
