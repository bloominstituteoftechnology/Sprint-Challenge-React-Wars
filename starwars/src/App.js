import React, { Component } from 'react';
import './App.css';

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
        <div className="character"><button className="btn">Luke Skywalker</button></div> 
        <div className="character"><button className="btn">C-3PO</button></div> 
        <div className="character"><button className="btn">R2-D2</button></div> 
        <div className="character"><button className="btn">Darth Vader</button></div> 
        <div className="character"><button className="btn">Leia Organa</button></div> 
        <div className="character"><button className="btn">Owen Lars</button></div> 
        <div className="character"><button className="btn">Beru Whitesun Lars</button></div> 
        <div className="character"><button className="btn">R5-D4</button></div> 
        <div className="character"><button className="btn">Biggs Darklighter</button></div> 
        <div className="character"><button className="btn">Obi-Wan Kenobi</button></div> 
      </div>
    );
  }
}

export default App;
