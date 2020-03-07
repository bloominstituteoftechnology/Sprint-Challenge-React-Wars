import React, { useEffect, useState } from 'react';
import './App.css';
import Films from "./Films";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState({});
  useEffect ( () => {
    axios.get('http https://swapi.co/api/people/1/').then( res => {
      setData(res.data);
      console.log(res)
    })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
      <Films film={data.films}/>
    </div>
  );
}

export default App;
