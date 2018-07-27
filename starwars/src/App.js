import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      open: false
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleToggleInfo = created => {
    let starwarsChars = this.state.starwarsChars.slice();
    starwarsChars = starwarsChars.map(thisChar => {
      if (thisChar.created === created) {
        thisChar.open = !thisChar.open;
        return thisChar;
      } else {
        return thisChar;
      }
    });
    this.setState({ starwarsChars });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Cards
          starwarsChars={this.state.starwarsChars}
          handleToggle={this.handleToggleInfo}
          open = {this.state.open}
        />
      </div>
    );
  }
}

export default App;
