import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from "./components/Card";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [state, setState] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect( () => {
    axios
    .get(`https://swapi.co/api/people/`)
    .then(response => {
      //console.log(response.data.results)
      setState(response.data.results)
    })
    .catch(error => {
      console.log(`Their was a problem ${error}`)
    })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="main-container">{state.map((info, index) => {
      //console.log(info.name)
      return(
        <div className="card-container" key={index}>
          <Card name= {info.name} />
        </div>
      )
     })}
     </div>
    </div>
  );
}
export default App;