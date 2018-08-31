import React, { Component } from 'react';
import './App.css';
import CharCardsList from './components/CharCardsList';
import ChangePage from './components/ChangePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      charPage: 'https://swapi.co/api/people/',
      nextPage: '',
      prevPage: '',
    };
  }

  gotoNextPage() {
    console.log('next page');
    // console.log(this.state);
    // this.setState({ charPage: this.state.nextPage });
  }

  gotoPrevPage() {
    console.log('previous page');
  }

  componentDidMount() {
    this.getCharacters(this.state.charPage);
  }

  getCharacters = (URL) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
        this.setState({ nextPage: data.next });
        this.setState({ prevPage: data.previous });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  render() {
    return (
      // console.log(this.state.prevPage),
      // console.log(this.state.nextPage),
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ChangePage
          gotoNextPage={this.gotoNextPage}
          gotoPrevPage={this.gotoPrevPage}
          nextPage={this.state.nextPage}
          prevPage={this.state.prevPage}
        />
        <CharCardsList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
