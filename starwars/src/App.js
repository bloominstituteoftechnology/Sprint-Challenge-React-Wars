import React, { Component } from "react";
import Card from "./components/card";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
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
        this.setState({ starwarsChars: data.results }, async () => {
          const chars = await Promise.all(this.state.starwarsChars.map(async (character) => {
            let res = await fetch(character.homeworld);
            res = await res.json();
            character.homeworld = res;
            return character;
          }));
          this.setState({
            starwarsChars: chars
          })
        });
       
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <section className="characters">
          {this.state.starwarsChars.map((character, i) => (
            <Card character={character} key={i} />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
