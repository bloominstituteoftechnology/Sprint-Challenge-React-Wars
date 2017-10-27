import React, { Component } from 'react';
import SWCharsContainer from './components/SWCharsContainer/SWCharsContainer.js';
import './App.css';

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
      <div>
        <div className="App">
          <h1 className="Header">React Wars</h1>
        </div>
        <div>
          {this.state.starwarsChars.map((char) => {
            return (
              <SWCharsContainer char={ char } />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
