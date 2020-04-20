import React from 'react';
import './App.css';
import randm from "./images/randm.jpg"
import Character from "./components/Character.js";
import { Silhouette, Title, Header, } from "./components/Styles.js"



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header>
        <Title>RICK AND MORTY</Title> 
        <Silhouette src={randm} alt="Rick and Morty" />
      </Header>
       
      <Character />
    </div>
  );
}

export default App;
