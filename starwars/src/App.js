import React, { Component } from 'react';
import './App.css';
import charactersForm from'./components/charactersForm'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  displayInfo = e =>{
    e.preventDefault(); 
    const starwarsChars = this.state.starwarsChars.slice(); 
    starwarsChars.push({
      name:this.state.starwarsChars, 
    });
     this.setState({ starwarsChars })
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

  render() {
    return (
    <charactersForm
      handleDisplay={this.displayInfo} />
    );
  }
}

export default App;
