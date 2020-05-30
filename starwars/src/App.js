import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people/')
      .then(res => {
        console.log('from App', res);
        setPerson(res.data.results);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {person.map(Object => {
        return <Character character={Object.name} gender={Object.gender}
          eyes={Object.eye_color}
          hair={Object.hair_color}
        />;
      })}
    </div>
  );
}

export default App;
