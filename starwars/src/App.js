import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
  }
};

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL =>  {
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
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h2>Star Wars Birth Years</h2>
        <div className="Container">
        <p className="Name">Name</p>
        <p className="birthYear">Birth Year</p>
        //going to try rendering a simple table of charcters names and their years-of-birth; will go on to deeper complexity once I've mastered this; the p elements are placeholders.
        </div>
      </div>
    );
  }
}




export default App;
