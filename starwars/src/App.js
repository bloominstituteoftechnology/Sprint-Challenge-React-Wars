import React, { Component } from 'react';
import './App.css';

import StarWarsList from './components/StarWars';
import SearchChars from './components/SearchChars';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      searchedChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
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
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  searchCharacters = ev => {
    let charSearch = this.state.starwarsChars.filter(char => {
      return char.name.toLowerCase().includes(ev.target.value.toLowerCase());
    })

    if (charSearch.length === this.state.starwarsChars.length){
      this.setState({
        searchedChars: [],
        searchText: ev.target.value
      });
    } else {
      this.setState({
        searchedChars: charSearch,
        searchText: ev.target.value
      });
    }
  }

  render() {
    return (
      <div className="App">
      <div className="HeaderContainer">
        <h1 className="Header">WANTED</h1>
        <h2 className="Subtitle">For Crimes Against The Empire</h2>
        </div>
        <SearchChars 
        inputText={this.state.searchText}
        charSearchChange={this.searchCharacters}
        />
        <StarWarsList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
