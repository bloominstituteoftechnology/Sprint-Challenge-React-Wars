import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      pageNum: 1
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people?page=' + this.state.pageNum);
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

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="Card-Container">
          {this.state.starwarsChars.map((chracter, i) => {
            return <CharacterCard key={i} data={chracter} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
