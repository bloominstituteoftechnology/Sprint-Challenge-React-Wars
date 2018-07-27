import React, { Component } from "react";
import CardContainer from "./components/CardContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextData: [],
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          nextData: data.next,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleNextData = () => {
    if (this.getCharacters(this.state.nextData)) {
      this.setState({
        starwarsChars: this.state.nextData,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CardContainer characters={this.state.starwarsChars} />
        <button onClick={this.handleNextData}>Next page</button>
      </div>
    );
  }
}

export default App;
