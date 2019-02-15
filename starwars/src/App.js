import React, { Component } from "react";
import CharList from "./components/CharList";
import CharCard from "./components/CharCard";
import "./css/main.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      moreCharInfo: {}
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

  moreInfo = e => {
    e.preventDefault();
    // sets to Luke for now
    this.setState({ moreCharInfo: this.state.starwarsChars[0] });
    // const index = this.state.starwarsChars.findIndex(
    //   char => char.created === e.target.created
    // );
    // this.setState({ moreCharInfo: this.state.starwarsChars[index] });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="characters">
          <CharList
            starwarsChars={this.state.starwarsChars}
            moreInfo={this.moreInfo}
          />
          <CharCard moreCharInfo={this.state.moreCharInfo} />
        </div>
      </div>
    );
  }
}

export default App;
