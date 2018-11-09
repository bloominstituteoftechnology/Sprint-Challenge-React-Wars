import React, { Component } from "react";
import "./App.css";
import StarWarsCharCardList from "./components/StarWarsCharCardList";
import StarWarsPage from "./components/StarWarsPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      warsPage: "https://swapi.co/api/people/",
      nextPage: "",
      prevPage: ""
    };
  }

  nextPage() {
    console.log("next page");
  }

  prevPage() {
    console.log("prev page");
  }

  componentDidMount() {
    this.getCharacters(this.state.warsPage);
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
        console.log(data);
        this.setState({ starwarsChars: data.results });
        this.setState({ nextPage: data.next });
        this.setState({ prevPage: data.prev });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarsPage
          goNextPage={this.nextPage}
          goPrevPage={this.prevPage}
          nextPage={this.state.nextPage}
          prevPage={this.state.prevPage}
        />
        <StarWarsCharCardList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
