import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import './App.css';

import People from "./components/people";

const GetNext = styled.button`
    margin: 15px;
    font-size: 1.6rem;
    border: 2px solid white;
    border-radius: 6px;
    color: white;
    background-color: transparent;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState(0);
  const [next, setNext] = useState(0);

  useEffect(() => {
    axios
        .get('https://swapi.co/api/people/')
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        });
  }, []);

  useEffect(() => {
        axios
            .get(next)
            .then((response) => {
                setData(response.data);
            });
    }, [next]);

  function getPrevious() {
      if(data.previous) {
          setNext(data.previous);
      }
  }
  function getNext() {
      if(data.next) {
          setNext(data.next);
      }
  }

  if(!data) {
      return <p>Loading ...</p>
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <People people={data.results} />
        <GetNext onClick={()=>{getPrevious()}}>Previous</GetNext>
        <GetNext onClick={()=>{getNext()}}>Next</GetNext>
    </div>
  );
};

export default App;
