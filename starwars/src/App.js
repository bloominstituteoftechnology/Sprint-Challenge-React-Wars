import React, {Component} from 'react';
import './App.css';
import {SingleCharacter} from './components/charsIter.js';
import {SingleCharacterAttr} from './components/charsIter.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentItem: '',
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
        let thedata = data;
        // this.setState({starwarsChars: data.results});
        this.setState(prevState => {
          const data = thedata.results;
          return {starwarsChars: data};
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nameClick = event => {
    let target = event.target.innerText;
    this.setState(prevState => {
      return {currentItem: target};
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="charContainer">
          <SingleCharacter
            state={this.state.starwarsChars}
            click={this.nameClick}
          />
        </div>
        <SingleCharacterAttr
          state={this.state.starwarsChars}
          name={this.state.currentItem}
        />
      </div>
    );
  }
}

export default App;
