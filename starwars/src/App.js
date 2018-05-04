import React, { Component } from 'react';
import './App.css';

const Card = (props) => {
  return (
    <div className="card">
      <img class="card-img-top" src="https://swapi.co/api/planets/1/" alt="planet" />
      <div className="card-body">
        <h5 class="card-title">{props.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.height}</li>
        <li className="list-group-item">{props.hair_color}</li>
        <li className="list-group-item">{props.eye_color}</li>
        <li className="list-group-item">{props.birth_year}</li>
        <li className="list-group-item">{props.gender}</li>
        <li className="list-group-item">{props.homeworld}</li>
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
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Card
          name={}
          height={}
          hair_color={}
          eye_color={}
          birth_year={}
          gender={}
          homeworld={}
        />
      </div>
    );
  }
}

export default App;
