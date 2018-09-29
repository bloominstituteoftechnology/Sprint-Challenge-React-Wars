import React, { Component } from 'react';
import StarLists from "./components/StarLists";
import './App.css';
import StarInfo from './components/StarInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleClick = () => {
    
  }

  render() {
    console.log(this.card)
    return (
      <div className="container">
        <h1 className="Header">React Wars</h1>
          <StarLists  show={this.handleClick} stars={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
