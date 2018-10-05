import React, { Component } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      picture: [
        "luke.jpg",
        "c3po.jpg",
        "r2d2.jpg",
        "vader.jpg",
        "leia.jpg",
        "lars.jpg",
        "beru.jpg",
        "r5d4.jpg",
        "biggs.jpg",
        "obi.jpg"
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
    // console.log(this.state.starwarsChars.map(char => char.name));
    const starwars = this.state.starwarsChars;
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CardContainer starwars={starwars} />
      </div>
    );
  }
}

export default App;
