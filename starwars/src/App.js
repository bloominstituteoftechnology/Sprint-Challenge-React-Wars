import React, { Component } from "react";
import "./App.css";
import CardsList from "./components/CardsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      prev: "",
      next: ""
    };
  }

  componentDidMount() {
    console.log("componentDidMount called");
    this.getCharacters(`https://swapi.co/api/people/`);
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
        this.setState({
          starwarsChars: data.results,
          prev: data.previous,
          next: data.next
        });
        if (data.previous === null) {
          this.setState({ prev: "https://swapi.co/api/people/?page=9" });
        } else if (data.next === null) {
          this.setState({ next: "https://swapi.co/api/people/" });
        }
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  clickLeft = () => {
    this.getCharacters(this.state.prev);
  };
  clickRight = () => {
    this.getCharacters(this.state.next);
  };

  render() {
    console.log("render called");
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="jutCard">
          <i onClick={this.clickLeft} class="fas fa-arrow-left" />
          <CardsList characters={this.state.starwarsChars} />
          <i onClick={this.clickRight} class="fas fa-arrow-right" />
        </div>
      </div>
    );
  }
}

export default App;
