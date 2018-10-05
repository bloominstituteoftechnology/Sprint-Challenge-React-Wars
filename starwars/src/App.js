import React, { Component } from 'react';
import './App.css';
import Character from './components/Character.js';
import Pagination from './components/Pagination/Pagination';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
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
        this.setState({
          starwarsChars: data.results,
          pageNext: data.next,
          pagePrevious: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  pageNext = () => {
    this.getCharacters(this.state.pageNext);
  }
  pagePrevious = () => {
    this.getCharacters(this.state.pagePrevious);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Pagination
          navImageLeft="img/nav_left.png"
          navImageRight="img/nav_right.png"
          pagePrevious={this.pagePrevious}
          pageNext={this.pageNext}
        >
          <div className="card-container">{
            this.state.starwarsChars.map(character => (
              <Character
                key={character.name}
                character={character}
              />
            ))
          }</div>
        </Pagination>
      </div>
    );
  }
}

export default App;
