import React, { Component } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      next: ""
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }
  componentDidUpdate() {
    if (this.state.next) {
      this.getCharacters(this.state.next);
    }
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
        console.log(data.next);
        this.setState({
          starwarsChars: [...this.state.starwarsChars, ...data.results],
          next: data.next
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
