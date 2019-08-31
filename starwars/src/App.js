import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Name from './components/Name';
import Birthday from './components/Birthday';
import Gender from './components/Gender';
import './App.css';
// import { Button } from 'reactstrap';

function App () {
  const [data, setData] = useState([]);
  // const [count, setCount] = useState('starwarsChars');
  
  useEffect(() => {
    console.log('first render');

    axios.get("https://swapi.co/api/people/")
  .then(response => {
    console.log(response.data);
    setData(response.data)
  // .catch(error => console.log(error));
    })
  }, [data]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars - Star Wars</h1>
      <Header />
      <Name />
      <Birthday />
      <Gender />
    </div>
  );
}

export default App;
