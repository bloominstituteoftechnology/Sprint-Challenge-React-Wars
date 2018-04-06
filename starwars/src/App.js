import React, { Component } from 'react';
import Charcards from './Characters/Charcards';
import Reactstrap from "reactstrap";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
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
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="Container">
          <div className="itemWrap">
            {this.state.starwarsChars.map((char, index) => {
              return (
                <Charcards
                  character={char}
                  key={index}
                  picture={this.state.profilePicture}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
