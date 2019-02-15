import React, { Component } from 'react';
import './App.css';


const Character = props => {
  const {birth_year, created, edited, eye_color, films, gender, hair_color, height, homeworld, mass, name, skin_color, species, starships, url, vehicle} = props.charProp;
  return (
    <div>
      <h4>Character: {name} </h4>
      <ul>
        <li>Birth Year: {birth_year}</li>
      </ul>
    </div>
  )
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
      
    };
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
      <div className="App">
        <h1 className="Header">React Wars</h1>


        {this.state.starwarsChars.map((i) => <Character charProp={i} />
        )}
      </div>

    );
  }
}

export default App;
