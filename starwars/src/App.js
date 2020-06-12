import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character.js";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const [data, setdata] = useState([])

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10')
    .then( res=>{
      setdata(res.data)
      console.log(res.data)
     
    })

    .catch( err =>{
      debugger
    })
  }, [] )
 

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character data ={data}/>
    </div>
  );
}

export default App;
