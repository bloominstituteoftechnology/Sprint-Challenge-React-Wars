import React, { Component } from "react";
import Character from "./components/Character";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
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
        console.log("DATA:", data);
        /* SORT data.results by name*/
        const sorted = data.results.sort((charA, charB) =>
          charA.name > charB.name ? 1 : charB.name > charA.name ? -1 : 0
        );
        this.setState({ starwarsChars: sorted });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="container">
          {this.state.starwarsChars.map(item => (
            <Character key={item.name} character={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
