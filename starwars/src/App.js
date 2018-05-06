import React, { Component } from 'react';
import './App.css';
import Card from "./Components/card";

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
    console.log("this is me:", this.state.starwarsChars);
    // let cards = this.state.starwarsChars.map((item, index) => {
    //   return <Card hereIAm={item} key={index} />
    //   console.log("this is me:", this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="cardFlow">
        { this.state.starwarsChars.map((item, index) => {
  return <Card hereIAm={item} key={index} />
})}
        </div >
      </div>  
       
    );
  }
}

export default App;


