import React, { Component } from 'react';
import './App.css';
// import charactersForm from'./components/charactersForm'; 

const characters = props => {
  const { name } = props.charactersProp;
  return (
    <div>
      <h4>Name: {name}</h4>
    </div>
  );
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  displayInfo = e =>{
    e.preventDefault(); 
    const starwarsChars = this.state.starwarsChars.slice(); 
    starwarsChars.push({
    name:this.state.starwarsChars, 
    });
     this.setState({ starwarsChars: starwarsChar })
  }

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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      {this.state.starwarsChars.map(starwarsChar => <characters charactersProp={starwarsChar} />)}
      <button className="btn" onClick={this.displayInfo}>Characters</button>
    );
  }
}

export default App;
