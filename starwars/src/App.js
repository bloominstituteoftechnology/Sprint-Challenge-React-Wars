import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import PageControls from './components/PageControls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: null,
      prevPage: null,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  nextPage = e => {
     const url = this.state.nextPage;
     if (url) {this.getCharacters(url);}
  }

  prevPage = e => {
    const url = this.state.prevPage;
    if (url) {this.getCharacters(url);}
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
        this.setState({ nextPage: data.next});
        this.setState({ prevPage: data.previous});
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters={this.state.starwarsChars}/>
        <PageControls nextPage={this.nextPage} prevPage={this.prevPage}/>
      </div>
    );
  }
}

export default App;
