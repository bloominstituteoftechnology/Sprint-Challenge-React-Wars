import React, { Component } from 'react';
import './App.css';
import StarwarsChars from './components/StarwarsChars';

// Class component is a JS class that extends the base class and has a state object with lifecycle method.
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  // happens after rendering, in the mounting phase of the lifecycle
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
        // set state is a part of the lifecycle because it's
        // updating the component with the render method
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const { starwarsChars } = this.state;
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarwarsChars chars={starwarsChars} />
      </div>
    );
  }
}

export default App;
