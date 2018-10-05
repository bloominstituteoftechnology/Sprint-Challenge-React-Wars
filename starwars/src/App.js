import React, { Component } from 'react';
import StarWarsCard from './components/StarWarsCard';
import Button from './components/button';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  nextPage = event => {
    if (this.state.page) {
      this.getCharacters(
        `https://swapi.co/api/people/?page=${this.state.page + 1}`
      );
      this.setState({ page: this.state.page + 1 });
    }
  };

  previousPage = event => {
    if (this.state.page > 1) {
      console.log('clicked');
      this.getCharacters(
        `https://swapi.co/api/people/?page=${this.state.page - 1}`
      );
      this.setState({ page: this.state.page - 1 });
    }
  };

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        console.log(res);
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

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="buttons">
          <Button btnTitle="Previous" click={this.previousPage} />
          <Button btnTitle="Next" click={this.nextPage} />
        </div>
        <StarWarsCard data={this.state} />
      </div>
    );
  }
}

export default App;
