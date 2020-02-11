import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [ starwarChars, setStarwarChars ] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


  useEffect( () => {
    axios
    .get("https://swapi.co/api/people")
    .then(response => {
      console.log("response", response)
      setStarwarChars(response.data.results)})
    .catch(error => {});
    
  

  }, []);



// 
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {starwarChars.map( (starwarCharacter) => (
        <StarWarCharacterCard starwarsChar={starwarCharacter} />

      ))}

    </div>
  );
}

function StarWarCharacterCard (props) {
    const {starwarsChar} = props;
return <div className="card">  
        <h3>{starwarsChar.name}</h3>
        <p>{starwarsChar.birth_year}</p>

       </div>
}

export default App;
