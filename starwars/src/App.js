import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      newCardColor: '',
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
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

  updateColor = (event) => {
    event.preventDefault();
    const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    const starwarsChars = this.state.starwarsChars;
    for (let i = 0; i < starwarsChars.length; i++){
      starwarsChars[i].name = "JAR JAR BINKS";
    }
    this.setState({
      starwarsChars: starwarsChars
    });
};



  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="flex-card-container">
          {this.state.starwarsChars.map((starwarsChar, i) => {
            return (
              <div className="App-posts">
                <div className="card-container">
                <div className="name" id={`new-card-${i}`} onMouseOver={this.updateColor}>{starwarsChar.name}</div>
                </div>
              </div>
            );
            })}
          </div>
      </div>
    );
  }
}

export default App;
