import React, { Component } from "react";
import "./App.css";
import CardContainer from "./components/CardComponents/CardContainer.js";
import SearchForCharacter from "./components/CardComponents/SearchForCharacter";
import { getPreviousPage, getNextPage } from "./paginationFunctions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      nextPage: "",
      previousPage: "",
      searchInput: "",
      singleCharacter: '',
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
        console.log(data);
        this.setState({
          starwarsChars: data.results,
          nextPage: data.next,
          previousPage: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getSingleCharacter = (e) => {
    e.preventDefault()
    fetch(`https://swapi.co/api/people/?search=${this.state.searchInput}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({singleCharacter: data.results[0], searchInput: ''})
    })
    .catch(err => {
      throw new Error(err);
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <SearchForCharacter
          searchInput={this.state.searchInput}
          changeHandler={this.changeHandler}
          getSingleCharacter={this.getSingleCharacter}
          singleCharacter={this.state.singleCharacter}
        />
        <br />
        <br />
        <button
          onClick={() =>
            getPreviousPage(this.state.previousPage, this.getCharacters)
          }
        >
          Previous Page
        </button>
        <button
          onClick={() => getNextPage(this.state.nextPage, this.getCharacters)}
        >
          Next Page
        </button>
        <CardContainer swData={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
