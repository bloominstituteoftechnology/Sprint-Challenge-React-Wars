import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import People from './components/People';
import Header from './components/Header';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then (res => setPeople(res.data.results) //why can't I console.log before this setPeople?
      )
      .catch (err => console.log(err))
  }, [])

  console.log("STATE:", people)
  return (
    <div className="App">
      <Header />
      <People people = {people} />
    </div>
  );
}

export default App;
