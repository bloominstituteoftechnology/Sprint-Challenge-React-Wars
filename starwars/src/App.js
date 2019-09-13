import React, {useEffect, useState} from 'react';
import axios from "axios";
import Cards from './components/card';
import footer from './components/footer';
import './App.css';

const App = () => {

  const [characters, setCharacters] = useState('');

  useEffect(() => {
  
    axios.get('https://lambda-github-api-server.herokuapp.com/')
    
    // to log the results if completed 
    .then(success => {
      console.log('data', success.data);
      console.log('results', success.data.results);
    
      setCharacters(success.data.results);
    })
     
    .catch(failure => {
      console.log('unable to complete the request');
    })
  }
    ,[]
  )

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters </h1>
      <h2> {characters} </h2>
      <footer/>

    </div>
  );
}

export default App;
