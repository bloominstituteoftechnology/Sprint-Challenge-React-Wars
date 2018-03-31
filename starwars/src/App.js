import React, { Component } from 'react';
import Portrait from './components/Portrait/Portrait';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
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
          <ul className="Portraits">
            {this.state.starwarsChars.map((char, index) => {
              return (
                  <Portrait character={char} key={index} />
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
