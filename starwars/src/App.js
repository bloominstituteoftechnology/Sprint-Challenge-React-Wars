import React, { Component } from 'react';
import CharCard from './Components/CharCard/CharCard.js';
import NavButtons from './Components/NavButtons/NavButtons.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainObject: {},
      starwarsChars: [],
      urlString: 'https://swapi.co/api/people'
    };
  }

  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    this.getCharsFromNet(this.state.urlString);
  }

  getCharsFromNet(urlString) {

    fetch(urlString)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results, mainObject: data, urlString: urlString });
      })
      .catch(err => {
        throw new Error(err);
      });

  }

  changeUrlString(urlString) {
    this.getCharsFromNet(urlString);
  }

  render() {

    return (
      <div className="App">

        <h1 className="Header">React Wars</h1>
        {console.log()}
        <NavButtons next={this.state.mainObject.next} previous={this.state.mainObject.previous} changeFunc={this.changeUrlString.bind(this)}/>
        {this.state.starwarsChars.map((character, index) => <CharCard key={index} character={character} />)}
      </div>
    );
  }

}

export default App;
