import React, { Component } from 'react';
import CardList from './components/CardList';
import PageSelector from './components/PageSelector';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 'https://swapi.co/api/people/?page=1',
      prevPage: '',
      nextPage: ''
    };
  }

  componentDidMount() {
    this.getCharacters(this.state.currentPage);
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
          prevPage: data.previous,
          nextPage: data.next
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  changePage = event => {
    event.preventDefault();
    this.setState({
      [this.state.currentPage]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h2>Star Wars Characters</h2>
        <PageSelector currentPage={this.state.currentPage} prevPage={this.state.prevPage} nextPage={this.state.nextPage}/>

        <CardList
          starwarsChars={this.state.starwarsChars}
        />
      </div>
    );
  }
}

export default App;
