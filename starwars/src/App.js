import React, { Component } from "react";
import "./App.css";
import StarWars from "./components/StarWars";
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  nextPage = () => {
    this.getCharacters(
      `https://swapi.co/api/people/?page=${this.state.page + 1}`
    );
    this.setState({ page: this.state.page + 1 });
  };

  previousPage = () => {
    if (this.state.page > 1) {
      this.getCharacters(
        `https://swapi.co/api/people/?page=${this.state.page - 1}`
      );
      this.setState({ page: this.state.page - 1 });
    }
  };

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="header">React Wars</h1>
        <div className="buttons">
          <button className="previous" onClick={this.previousPage}>
            Previous
          </button>
          <button className="next" onClick={this.nextPage}>
            Next
          </button>
        </div>
        <StarWars characters={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
