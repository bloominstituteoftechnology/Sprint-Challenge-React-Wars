import React, { Component } from "react";
import "./App.css";
import CardsContainer from "../src/components/CardsContainer.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextURL: ""
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    if (!URL) {
      //do nothing
      console.log("no new characters");
    }
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        this.setState({ nextURL: data.next });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="Header">React Wars</h1>
          <CardsContainer characters={this.state.starwarsChars} />
        </div>
        <div
          className="next"
          onClick={() => {
            this.getCharacters(this.state.nextURL);
          }}
        >
          >
        </div>
      </div>
    );
  }
}

export default App;
