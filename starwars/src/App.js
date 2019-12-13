import React from 'react';
import './App.css';
import StarwarsStars from "./components/StarwarsStars"

  // Try to think through what state you'll need for this app before starting. Then build out

 const App = () => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    <div className = "cardParent">
      <StarwarsStars/>
    </div>

    </div>
  );
}

export default App




