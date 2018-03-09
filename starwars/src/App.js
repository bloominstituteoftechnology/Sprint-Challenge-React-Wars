import React, { Component } from "react";
import "./App.css";
import { Container } from "reactstrap";
import CharacterComponent from "./components/CharacterComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsPlanets: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch("https://swapi.co/api/people")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <Container>
          <h1 className="Header">React Wars</h1>
          {this.state.starwarsChars.map(char => {
            return <CharacterComponent key={char.count} char={char} />;
          })};
        </Container>
      </div>
    );
  }
}

export default App;
