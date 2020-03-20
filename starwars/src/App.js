import React, { useState, useEffect } from 'react';
import './App.css';
import PageBody from './PageBody.js';
import axios from 'axios';
import styled from "styled-components";

const PageButton = styled.button`
  width: 120px;
  height: 30px;
  margin: 5px 10px;
  `;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const nextPage = e =>{
    if(page<=8){
      setPage(page+1);
    }
  }
  const prevPage = e =>{
    if(page>=2){
      setPage(page-1)
    }
  }
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`).then(response => {
      //console.log(response.data.results);
      setData(response.data.results)
    }).catch(error => {
      console.log('Error', error);
    });
  }, [page]);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PageButton 
        onClick={prevPage}>Previous Page</PageButton>
      <PageButton 
        onClick={nextPage}>Next Page</PageButton>
      <PageBody
        data = {data}
      />
    </div>
  );
}

export default App;
