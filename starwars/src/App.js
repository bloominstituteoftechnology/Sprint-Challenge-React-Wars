import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [apiData, setAPIData] = useState([])
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
     .then(res => {
      console.log(res.data.results)
      setAPIData(res.data.results)
      console.log(apiData)
     })
     .catch(err => {
       console.log(`There's an error of ${err}`)
     })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
