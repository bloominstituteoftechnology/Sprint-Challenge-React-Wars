import React, { Component } from 'react';
import './App.css';
import CharLinks from './components/CharLinks' ;
import SearchBox from './components/SearchBox' ;
import InfoCard from './components/InfoCard' ;

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  clickLinkReturnCard() {

  }
  copyStateNewArrayNameId = () => {
    let nameArray = this.state.starwarsChars.map((obj) => {
      
    });
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
        <h3>Star Wars Characters</h3>
        <CharLinks />
        <SearchBox />
        <InfoCard />
      </div>
    );
  }
}

export default App;
