import React, { Component } from 'react';
import './App.css';

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src="https://swapi.co/api/planets/1/" alt="planet" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Height: {props.height}</li>
        <li className="list-group-item">Hair Color: {props.hair_color}</li>
        <li className="list-group-item">Eye Color: {props.eye_color}</li>
        <li className="list-group-item">Birth Year: {props.birth_year}</li>
        <li className="list-group-item">Gender: {props.gender}</li>
      </ul>
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
console.log(this.state.starwarsChars)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {
          this.state.starwarsChars.map(char => {
            return (
              <Card
                height={char.height}  
                name={char.name}
                hair_color={char.hair_color}
                eye_color={char.eye_color}
                birth_year={char.birth_year}
                gender={char.gender}
              />
            );
        })}
        
      </div>
    );
  }
}

export default App;
