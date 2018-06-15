import React, { Component } from 'react';
import './App.css';
import Heroes from './components/hero';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

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

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        <Heroes className= 'hero' name='Luke Skywalker'/>
        <Heroes className= 'hero' name='C-3P0' action='C-3P0'/>
        <Heroes className= 'hero' name='RD-D2' action='R2-D2'/>
        <Heroes className= 'hero' name='C-3P0' action='Darth Vader'/>
        <Heroes className= 'hero' name='C-3P0' action='Leia Organa'/>
        <Heroes className= 'hero' name='C-3P0' action='Owen Lars'/>
        <Heroes className= 'hero' name='C-3P0' action='Beru Whitesun Lars'/>
        <Heroes className= 'hero' name='C-3P0' action='R5-D4'/>
        <Heroes className= 'hero' name='C-3P0' action='Biggs Darklighter'/>
        <Heroes className= 'hero' name='C-3P0' action='Obi-Wan Kenobi'/>
        
      </div>
    );
  }
}

export default App;
