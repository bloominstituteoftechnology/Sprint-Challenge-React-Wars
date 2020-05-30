import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people/')
      .then(res => {
        console.log('from App', res)
        setPerson()
      }, [])
  })

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
