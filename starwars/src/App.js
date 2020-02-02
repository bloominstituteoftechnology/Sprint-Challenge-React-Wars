import React, { useEffect } from "react";
import "./App.css";

import Reactstrap from "./Reactstrap";
import SWList from "./components/SWList";
// import CharacterCard from "./components/CharacterCard";

//import styles
import styled from "styled-components";

const StyledHeader = styled.h1`
 text-align: center;
  margin: 0 auto;
`


function App() {
  useEffect(() => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
    console.log("App component mounted.");

    return () => {
      console.log("App component unmounting...");
    };
  }, []);

  return (
    <div className="App">
       
      <StyledHeader>
      <header>
        <h1 className="Header">React Wars</h1>
      </header>
      <SWList/>
      {/*<Reactstrap />*/}

      </StyledHeader>
    
    </div>
  );
}

export default App;
