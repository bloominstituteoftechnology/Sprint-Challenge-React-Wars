import React, { Component } from 'react';
import CharacterDataList from './components/CharacterDataList';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
    this.previous;
    this.next;
    
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    if(URL === null) {
      return;
    }
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.previous = data.previous;
        console.log('Previous = ' + this.previous);
        this.next = data.next;
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterDataList dataList={this.state.starwarsChars} />
        <button onClick={()=>this.getCharacters(this.previous)}>previous</button>
        <button onClick={()=>this.getCharacters(this.next)}>next</button>
      </div>
    );
  }
}

export default App;
