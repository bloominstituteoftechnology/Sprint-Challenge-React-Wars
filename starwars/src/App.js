import React, { Component } from 'react';
import './App.css';
// import listItems from './components/myData';

const myCards = {
  border: "2px solid red"
}

const container = {
  display: "flex",
  width: "30%",
  justifyContent: "center",
  border: "2px solid blue"
}

const cardOne = {
  color: "red"
}

const cardTwo = {
  color: "green"
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
    // this.random = this.random.bind(this);
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
    
    const data = this.state.starwarsChars;
    // console.log(data.length)
  const myData = data.map((d) => <p key={d.name}>
    <li>Name: {d.name}</li>
    <li>Birth Year: {d.birth_year}</li>
    <li>Eye colour: {d.eye_color}</li>
    <li>Gender: {d.gender}</li>
    <li>Hair colour: {d.hair_color}</li>
    <li>Height: {d.height}</li>
    <li>Mass: {d.mass}</li>
    <li>Skin colour: {d.skin_color}</li>
  </p>
  )

  const number = Math.floor(Math.random() * data.length)
    // const eyeColour = myData.map((d) => <li key={d.name}>{d.eye_color}</li>)
    // const gender = myData.map((d) => <li key={d.name}>{d.gender}</li>)
    // const hairColour = myData.map((d) => <li key={d.name}>{d.hair_color}</li>)

    // const listItemsTwo = myData.map((d) => <li key={d.name}>{d.films}</li>)
    // const listItems = myData.map((d) => <div key={d.name}>{d}</div>)
    // console.log(this.state.starwarsChars)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h3>Who's better?</h3>
          <p>Seriously, tell me. I've never seen Star Wars.</p>
        <div style={container}>
          <div style={cardOne}>
            {myData[number]}
          </div>
          <div style={cardTwo}> 
            {myData[number-1]}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
