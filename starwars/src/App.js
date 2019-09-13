import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import { createGlobalStyle } from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const GlobalStyle = createGlobalStyle`
  .App {
    background-image: url(https://starwarsblog.starwars.com/wp-content/uploads/sites/8/2018/01/sw-iphone-wallpaper-bb8-1.jpg) !important;
  }
`
  return (
    <div className="App">
      <GlobalStyle/>
      <h1 className="Header">React Wars</h1>
      <CharacterList/>
    </div>
  );
}

export default App;
