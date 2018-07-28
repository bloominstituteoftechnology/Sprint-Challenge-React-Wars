import React, { Component } from 'react';
import './App.css';
import Dogs from './components/Dogs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    this.getDogs('https://dog.ceo/api/breeds/list/all');
    this.getDogImg('https://dog.ceo/api/breeds/image/random');
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
        this.setState({ dogs: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getDogImg = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ dogImg: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  onDogClick = breed => {
    fetch(`https://dog.ceo/api/breed/${breed.toString()}/images/random`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ dogImg: data.message })
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <h1 className="App-title">Welcome to Dogs Galore.</h1>
          <p>Click a breed to generate a random picture of it.</p>
        </header>
        <Dogs dogs={this.state.dogs} onClick={this.onDogClick} />
        <div className="dog-img-container">
          <img src={this.state.dogImg} alt="A random dog!" />
        </div>
      </div>
    );
  }
}

export default App;
