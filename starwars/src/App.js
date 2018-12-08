import React, { Component } from "react";
import "./css/App.css";
import Card from "./components/Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      current: 1
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

  next = _ => {
    if (this.state.current < 9) {
      this.getCharacters(
        `https://swapi.co/api/people/?page=${this.state.current + 1}`
      );
      this.setState(prevState => ({ current: prevState.current + 1 }));
    }
  };

  prev = _ => {
    if (this.state.current > 1) {
      this.getCharacters(
        `https://swapi.co/api/people/?page=${this.state.current - 1}`
      );
      this.setState(prevState => ({ current: prevState.current - 1 }));
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="pill">
          <span
            className={`nextPrev ${
              this.state.current > 1 ? "active" : "disabled"
            }`}
            onClick={this.prev}
          >
            PREV
          </span>
          <span
            className={`nextPrev ${
              this.state.current < 9 ? "active" : "disabled"
            }`}
            onClick={this.next}
          >
            NEXT
          </span>
        </div>
        {this.state.starwarsChars[0] ? (
          <Card characters={this.state.starwarsChars} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
