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
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        // this.setState({ nextUrl: data.next });
        // console.log(data);
      })
      .catch(err => {
        console.log(err);
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CardsContainer characters={this.state.starwarsChars} />
        {/* <div className="next" onClick={this.getCharacters(this.state.nextURL)}>
          More data
        </div> */}
      </div>
    );
  }
}

export default App;
