import React from 'react';
import './App.css';
import Character from './components/Character';
import "./components/StarWars.css";


const App = () => {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Character />
    </div>
  );
}

export default App;
