import React from "react";
import "./App.css";
import StarPeople from "./components/StarPeople/StarPeople";

console.log('Hello');

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h2>Characters:</h2>
      <StarPeople/>
    </div>
  );
}

export default App;
