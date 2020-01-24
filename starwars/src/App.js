 
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterContainer from './components/characterContainer';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [Data, setData] = useState([])
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {console.log(res)
    setData(res.data.results)})
    .catch(error => {console.log('no data', error)})
  },[]);

  return (
    
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterContainer charData = {Data} />
      

    </div>
  );
}


export default App;
