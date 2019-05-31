import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: {}
    };
  }

  componentDidMount() {
    this.getdogs('https://dog.ceo/api/breeds/image/random');
  }

  getdogs = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ dogs: data.message });
        console.log(this.state)
      })
      .catch(err => {
        throw new Error(err);
      });
  };





render() {
    return (
      <div className="App">
        <h1 className="Header">Dog App</h1>
        <img src={this.state.dogs} alt="dogs"></img>
   
      </div>
    );
  }
}

export default App;
