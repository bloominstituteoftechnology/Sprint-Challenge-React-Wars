import React, {useEffect, useState} from 'react';
import axios from "axios";

import Cards from './components/card';
import './App.css';

const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
  
    const dataFetched = axios.get('https://lambda-github-api-server.herokuapp.com/');

    dataFetched
      .then(response => {
        console.log('data', response.data);
        console.log('results', response.data.results);
      
        setCharacters(response.data.results);
      })     
      .catch(error => {
        console.log('unable to complete the request');
      })
  },[])



  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters </h1>
        {
          characters.map(char => {
            return <Cards data={char}/>
          })
        }
      <h2> {characters} </h2>
      <footer/>

    </div>
  );
}

export default App;
