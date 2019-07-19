import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonGrid from "./components/PersonGrid"
import Buttons from "./components/Buttons"


import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([])
  const [page, setPage] = useState(3)
  const [previousPage, setPreviousPage] = useState([])
  const [nextPage, setNextPage] = useState([])

  const pageUp = () => {
    setPage(page => page + 1);
    alert('Page Up')
  }
  const pageDown = () => {
    setPage(page => page - 1);
    alert('Page Down')
  }

  useEffect(() => {
  axios.get(`https://swapi.co/api/people/?page=${page}&format=json`)
    .then(response => {
      const charData = response.data.results;
      setData(charData);
      console.log('chardata', charData);
      const nextPageLink = response.data.next;
      setNextPage(nextPageLink);
      const previousPageLink = response.data.previous;
      setPreviousPage(previousPageLink);

    });
}, []);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PersonGrid
        charData={data}
       />
      <Buttons
        pageUp={pageUp}
        pageDown={pageDown}
       />
    </div>
  );
}

export default App;
