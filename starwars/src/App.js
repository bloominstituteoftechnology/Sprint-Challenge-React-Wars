import React, { Component } from "react";
import CardContainer from "./components/Card/CardContainer";
import Button from "./components/Button/Button";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: "",
      prev: ""
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
        this.setState({ starwarsChars: data.results,
                        next: data.next,
                        prev: data.previous
                      });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    if (this.state.next === null) return;
    else this.getCharacters(this.state.next);
  }

  prevPage = () => {
    if (this.state.prev === null) return;
    else this.getCharacters(this.state.prev);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="characters-container">
          <CardContainer character={this.state.starwarsChars} />
        </div>
        <Button text="&lt;" clickHandler={this.prevPage}/>
        <Button text="&gt;" clickHandler={this.nextPage}/>
      </div>
    );
  }
}

export default App;
