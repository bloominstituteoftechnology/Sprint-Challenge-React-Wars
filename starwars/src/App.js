import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <>
      <Route exact path="/"></Route>
      <Route path="/character/:id"></Route>
      <Route path="/episode/:id"></Route>
    </>
  );
};

export default App;
