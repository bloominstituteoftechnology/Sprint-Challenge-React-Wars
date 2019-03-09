import React, { Component } from 'react';
import './App.css';

import ViewSettings from './components/viewSettings'
import CharList from './components/charList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      viewName: 'default'
    };
  }


  // -start- DONT TOUCH THIS -- //
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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
  // -- DONT TOUCH THIS -end- //

  render() {
    return (
      <div className="App">
        <div className="header container">
          <h1>React Wars</h1>
          <ViewSettings />
        </div>
        <div className='content container'>
          <CharList 
            characterList={this.state.starwarsChars}
            viewName={this.state.viewName}
          />
        </div>

      </div>
    );
  }
}

export default App;
