import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PersonCard } from "./components/PersonCard";
import './App.css';

// Need to use response.data.results[0 - 9]

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);

  let array = [];
  let response2;
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {   
          useEffect( () => {
            axios.get('https://swapi.co/api/people/')
              .then(response => setPeople(response.data.results))
              .catch(error => console.log(error));
          }, [])
      }
      {
        people.map(i => {
          return <PersonCard person={i} />
        })
      }
    </div>
  );
}



const displayThePeeps = (response) => {
  console.log("The function ran");
  console.log(response.data.results);
  response.forEach(i => {
    return <h1>{i.name}</h1>;
  });
}

export default App;
