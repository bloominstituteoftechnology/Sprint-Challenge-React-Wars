import React, {useState, useEffect} from 'react';
import axios from "axios"
import './App.css';
import Character from "./components/Character"


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data, setData] = useState([])


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    console.log("Character.invoke");
    axios
    .get("https://swapi.py4e.com/api/people/1/")
    .then(response =>{
      console.log("This is the response: ", response)
      setData(response.data)
    })
    .catch(error =>{
      console.log("The data was not returned", error)
    })
  }, []);


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
