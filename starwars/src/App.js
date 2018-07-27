import React, { Component } from "react";
import "./App.css";
import Example from "./obiwankenobi";
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [
        // LukeSkywalker,
        // C3PO,
        // R2D2,
        // DarthVader,
        // LeiaOrgana,
        // OwenLars,
        // BeruLars,
        // R5D4,
        // BiggsDarklighter,
        // ObiwanKenobi
      ]
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Example />
      </div>
    );
  }
}

export default App;
