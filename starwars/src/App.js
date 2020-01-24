// note to self: this project is broken because starwars won't let me access their api. Do not refer to this for future projects.


import React  from 'react';
import './App.css';
import StarWarsContainer from './components/StarWarsContainer';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWarsContainer />
    </div>
  );
}
export default App;
