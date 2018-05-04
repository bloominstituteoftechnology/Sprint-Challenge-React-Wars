import React, { Component } from 'react';
import './App.css';
// import Characters from './components/Characters/Characters.js'
import CharList from './components/CharList/CharList.js'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people/')
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
        <header className="Header">
        <h1 className="App-title">React Wars!</h1>
        </header>

        <div>  
        <CharList/>
      </div>

      </div>
    );
  }
}

export default App;
