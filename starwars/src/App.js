import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import FilmSelectForm from "./components/FilmSelectForm.js";
import CardContainer from "./components/CardContainer";
import filmNames from "./data/filmNames";
import planetNames from "./data/planetNames";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentSelectedFilm: "All",
      currentSorted: []
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  currentMovieHandler = e => {
    console.log("selection: ", e.target.value);
    return this.setState({ currentSelectedFilm: e.target.value });
  };

  render() {
    console.log("RoodDataSet: ", this.state.starwarsChars);
    return (
      <div className="App">
        <Header />
        <div className="container">
          <FilmSelectForm currentMovieHandler={this.currentMovieHandler} />
          <CardContainer
            characters={this.state.starwarsChars}
            sortFilm={this.state.currentSorted}
          />
          {/* change to this.state.currentSorted when functional */}
        </div>
      </div>
    );
  }
}

export default App;
