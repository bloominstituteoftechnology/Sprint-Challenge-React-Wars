import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Test from "./components/Test"


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [endpoint, setEndpoint] = useState ('https://swapi.co/api/people/')
const [apiData, setApiData] = useState();
 

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios
  .get(endpoint)
  .then(response => {
    console.log(response.data);
    setApiData(response.data);
  })
  .catch(err => console.log(err));
}, [endpoint]); 


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Test/>
    </div>
  );
}

export default App;
