import React,{useState, useEffect} from 'react';
import './App.css';
// import Header from "/.components/Header/Header.js";
import axios from "axios";
import MainContainer from "./components/MainContainer/MainContainer.js";



const App = () => {
  const [CharData, setCharData] = useState("")
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
    .then(response =>{
      console.log("debug1", response);
      setCharData(response.data)
    })
    .catch(error =>{
      console.log("Sorry, please try again", error);
    });
  },[]);
  console.log("debug2",CharData)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
