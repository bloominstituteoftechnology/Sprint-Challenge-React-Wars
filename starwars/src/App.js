import React, { Component } from "react";
import "./App.css";
import CardsContainer from "./components/CardsContainer";
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      facePics: [
        <img src="./assets/star-wars-luke-skywalker-tatooine.jpg" alt="Luke" />,
        <img src="./assets/C3po.jpg" alt="C3pO" />,
        <img src="./assets/r2d2-socialmedia.jpg" alt="R2D2" />,
        <img src="./assets/Darth Vader.webp" alt="Darth Vader" />,
        <img src="./assets/Star-Wars-Princess-Leia.jpg" alt="Leia" />,
        <img src="./assets/Owen_Lars.jpg" alt="Owen" />,
        <img src="./assets/Beru_Lars.png" alt="Beru" />,
        <img src="./assets/r5d4.jpg" alt="R5D4" />,
        <img src="./assets/biggs.jpeg" alt="Biggs" />,
        <img src="./assets/Ben_Kenobi.png" alt="Obi Wan" />
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
        <CardsContainer swd={this.state.starwarsChars} facePics={this.state.facePics} />
        </div>
    );
  }
}

export default App;
