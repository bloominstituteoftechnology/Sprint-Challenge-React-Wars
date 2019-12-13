import React from 'react';
import axios from "axios";
import { useState, useEffect} from 'react';
import {Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader} from 'reactstrap';
import './App.css';
import CharacterCard from './components/CharacterCard';

const App = props => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people')
      .then(response => {
        console.log(response.data.results);
        const characterData = response.data.results;
        console.log(characterData);
        setCharacter(characterData);
      })
      .catch(error => {console.log("404 Stormtrooper missed", error)})
  },[]) 
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="characterCards w-50 text-center mx-auto">
        {character.map((data) => {
          return <CharacterCard key={data.name} name={data.name} mass={data.mass} birth={data.birth_year} height={data.height}/>;
        })} 
      </div>
    </div>
  );
}

export default App;
