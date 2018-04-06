import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title.js"
import CardContainer from "./components/CardContainer"
import CardLogic from "./components/CardLogic"


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount(e) {
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
      // e.preventDefault();

  }
  render() {
    return (
      <div className="App">
     
        {/* <h1 className="Header">React Wars</h1> */}
        <Title />
        <CardLogic data={this.state.starwarsChars} />
        <CardContainer />
      </div>
    );
  }
}

export default App;

