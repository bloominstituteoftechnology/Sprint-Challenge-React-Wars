import React, { Component } from 'react';
import Dogs from './components/Dogs/Dogs'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
        dogBreeds: []
    }
  }

  componentDidMount() {
    this.getDogs('https://dog.ceo/api/breeds/list/all');
  }

  getDogs = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ dogBreeds: data.message});
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    return (
      <div className="App">
        <h1>Breeds</h1>
        {console.log(this.state.dogBreeds)}
        <Dogs breeds={this.state.dogBreeds}/>
      </div>
    );
  }
}

export default App;
