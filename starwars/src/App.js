import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import CardList from "./components/CardList";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swData, setSwData] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log("Response:", res.data)
        setSwData(res.data.results)
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardList swData={swData} />
    </div>
  );
}

export default App;
