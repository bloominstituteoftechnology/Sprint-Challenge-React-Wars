import React from 'react';
import './App.css';
import title from './components/Title'
import cardGrid from './components/cardGrid' //You import your components, then render them below in the HTML.
//YOU RENDER THE CHILDREN/parent TO THIS
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
      <title /> {/*this is where you are rendering your components to the HTML on the page*/}
      
      <title />
      <cardGrid />

    </div>
  );
}

export default App;
