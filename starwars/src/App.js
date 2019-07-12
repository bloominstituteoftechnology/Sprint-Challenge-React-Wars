import React from "react";
import "./styles/App.css";
// import styled from 'styled-components'

import GetChars from "./components/GetChars";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <GetChars />
    </div>
  );
};

export default App;
