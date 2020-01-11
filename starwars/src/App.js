import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import LandingPage from './components/LandingPage';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin-bottom: 3%;
  font-size: 80px;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then(res => setData(res.data.results))
    .catch(err => console.log(err))
    
  }, [])
  console.log(data)

  return (
    <div className="App">
      <StyledTitle className="Header">React Wars</StyledTitle>
      <LandingPage data={data}/>
    </div>
  );
}

export default App;
