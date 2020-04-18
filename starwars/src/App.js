import React, { useState, useEffect } from 'react';
import Character from './components/Character'
import Axios from 'axios'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [rData, setRData] = useState([])

  useEffect(()=>{
    Axios
    .get('https://swapi.py4e.com/api/people/')
    
    .then(response => {
      console.log(response.data.results);
      setRData(response.data.results);
    
    })
    .catch(error => console.log("Error!", error))
  },[])
  
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className = 'row'>
        {rData.map(data => {
          return <Character name = {data.name} height = {data.height} mass = {data.mass} birth_year={data.birth_year} gender = {data.gender}/>
        })}  
      </div>
    </div>
  );
}

export default App;
