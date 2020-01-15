import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import InfoCard from './components/InfoCard';


const App = () => {
  const [character, starwarsChars] = useState([]);
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people')
      .then(res => {
        starwarsChars(res.data.results)
        console.log(res.data.results)
      })
      .catch(err => {
        console.log('Error', err)
      })
  }, []);
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <InfoCard starwarsChars={this.state.starwarsChars} />
    </div>
  );

  
  
}



export default App;
