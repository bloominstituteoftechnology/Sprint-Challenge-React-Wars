import React, { Component } from "react";
import SSB from "./components/SSB";
import SWCList from "./components/SWCList";
import "./components/StarWars.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      input: ""
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

  onSearchChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    const filteredChars = this.state.starwarsChars.filter(item => {
      return item.name.toLowerCase().includes(this.state.input.toLowerCase());
    });
    if (this.state.starwarsChars.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="App">
          <h1 className="Header">React Wars</h1>
          <SSB searchChange={this.onSearchChange} />
          <SWCList list={filteredChars} />
        </div>
      );
    }
  }
}

export default App;
