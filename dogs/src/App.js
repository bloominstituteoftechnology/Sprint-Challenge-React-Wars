import React, { Component } from 'react';
import './App.css';
import CardComponent from './components/CardComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogBreeds: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://dog.ceo/api/breeds/list/all');
    console.log(this.state)
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
        this.setState({ dogBreeds: data.message });
        console.log(data)
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Dog Wars</h1>
        {/* <CardComponent dogBreeds={this.state.dogBreeds}/> */}
      </div>
    );
  }
}

export default App;
