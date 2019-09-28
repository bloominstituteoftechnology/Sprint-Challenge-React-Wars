import React, { useState, useEffect } from 'react';
// import styled from 'styled components';
import axios from 'axios';
import People from './components/People.js'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const fetchChar = () => {
    axios
      .get (`https://swapi.co/api/people`)
      .then(result => {
        console.log(data)
        setData(result.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  };

  useEffect(fetchChar, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <h2>Characters</h2>
        
          {data.map ( (jedi, index) => {
            return (
              <People
                name = {jedi.name}
                key = {index}
                height = {jedi.height}
                gender = {jedi.gender}
                mass = {jedi.mass}
                hair_color = {jedi.hair_color}
                eye_color = {jedi.eye_color} 
              />
            )
          })}
        
    </div>
  );
}

export default App;