import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import Card from './Card';

function App() {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    console.log('React Wars');

    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response.data.results);
        setPeoples(response.data.results);
      })
      .catch(error => {
        console.log('display this messsage when there is an error', error);
      });

  }, []);


  return (
    <div className="App">
       <h1 className="Header">React Wars</h1>
      {/* <Card peoples={peoples} /> */}
    </div>
  );
}
export default App;


