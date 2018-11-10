import React, { Component } from "react";
import CharacterList from "./components/CharacterList";
import "./App.css";
import "./components/StarWars.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: null,
      prevPage: null
    };
    localStorage.clear(); // website takes a while to load unless cache is cleared
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
        this.setState({
          starwarsChars: data.results,
          nextPage: data.next,
          prevPage: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getHomeworld = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(homeWorldObject => {
        // this.setState({
        //   ...this.state.starwarsChars,
        //   ...this.state.nextPage,
        //   ...this.state.prevPage,
        //   ...this.state.starwarsChars.homeworld = homeWorldObject
        // });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  loadNextPage = () => {
    if (this.state.nextPage !== null) {
      this.getCharacters(this.state.nextPage);
    }
  };

  loadPrevPage = () => {
    if (this.state.prevPage !== null) {
      this.getCharacters(this.state.prevPage);
    }
  };

  render() {
    localStorage.clear(); // website takes a while to load unless cache is cleared
    return (
      <div className="App">
        <div className="Header">
          <button className="nextPrevPageButton" onClick={this.loadPrevPage}>
            Previous Page
          </button>
          <h1>React Wars</h1>
          <button className="nextPrevPageButton" onClick={this.loadNextPage}>
            Next Page
          </button>
        </div>

        <CharacterList
          characters={this.state.starwarsChars}
          getHomeworld={this.getHomeworld}
        />
      </div>
    );
  }
}

export default App;
