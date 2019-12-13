import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import CardSW from "./components/CardSW";
import "./components/StarWars.css";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charState, setCharState] = useState();

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data);
        setCharState(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!charState) {
    return <h2>Loading...</h2>;
  } else
    return (
      <Container>
        <Row>
        <div className="App">
          <h1 className="Header">React Wars</h1>
          {charState.map((results, index) => (
            <CardSW
              name={results.name}
              height={results.height}
              mass={results.mass}
              hairColor={results["hair_color"]}
              skinColor={results["skin_color"]}
              key={index}
            />
          ))}
        </div>
        </Row>
      </Container>
    );
};

export default App;
