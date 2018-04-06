import React, { Component } from 'react';
import './App.css';
import{ Character } from './Character';
import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });

      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <div className ="sticky-top">
        <SearchBar charList={this.state.starwarsChars}/>
        </div>
        <h1 className="Header">React Wars</h1>
        {/* Refactored HERE so that StarWarsChars could be deleted, as it was not necessary. */}
        <div className="Characters">
          {this.state.starwarsChars.map((item => {
            return <Character key={item.id} character={item} />
          }))}
        </div>
      </div>
    );
  }
}

export default App;
