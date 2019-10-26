import React from "react";
import "./App.css";
import CardUi from "./components/CardUI";
import CharacterInfoPro from './components/CharacterInfoPro'


const App = () => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterInfoPro />
      <CharacterInfoPro />
      <CharacterInfoPro />
      <CharacterInfoPro />
      <CharacterInfoPro />
    </div>
  );
};

export default App;
