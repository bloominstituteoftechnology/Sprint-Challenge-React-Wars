import React, { Component } from 'react';
import './App.css';
import StarWarsPeeps from './components/StarWarsPeeps.js';
import CharIndex from './components/CharIndex.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [
          // {
          //     name : '',
          //     height : '',
          //     birth_year : '',
          //     mass : '',

          // },
      ],
      jedi: ''
      // console.log(state.birth_year);
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

  displayCharacter = name => {
    const viewCharacter = this.state.starwarsChars
    this.setState({viewCharacter: viewCharacter})
  }

  render() {
    console.log('App Render Called!')
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
      <CharIndex
          starwarsChars={this.state.starwarsChars}
          
        />
      {/* <StarWarsPeeps
           */}
       </div>
    );
  }
}
// console.log(this.state.starwarsChars);
export default App;