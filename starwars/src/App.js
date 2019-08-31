import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Person from './components/Person';

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, updateData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.co/api/people/")
        .then(res => updateData(res))
    }
    fetchData();

  }, []);
  console.log(data);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Person data={data}/>
    </div>
  );
}

export default App;
