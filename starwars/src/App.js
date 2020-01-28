import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from "./components/card"


function App() {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    console.log('React Wars');

    axios
      .get('https://swapi.co/api/people/')
      .then(success => {
        console.log(success.data.results);
        setPerson(success.data.results);
      })
      .catch(fail => {
        console.log('this is an error message', fail);
      });
  }, []);

  return (
    <div className="App">
       <h1 className="Header">React Wars</h1>
       {!person.length && <h2>Loading…</h2>}
       {
         person.map((human, id ) => {
         return(
        <Card key={id} human={human}/> 
      )
       })
      }
    </div>
  );
}
export default App;