import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import CardComponent from './components/CardComponent/CardComponent';
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
        <NavBar />
        {this.state.starwarsChars.map((char, index) => {
          return (
            <div key={index}>
              <CardComponent char={char} />;
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;