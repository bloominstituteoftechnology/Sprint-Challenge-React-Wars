import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import styled from 'styled-components'


const CustomH1 = styled.h1({
  backgroundColor: '#9A887A',
  color: 'white', 
  width:800,
  marginLeft:200,
  marginTop: 20,
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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
        <CustomH1>React Wars</CustomH1>
        <CharacterList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
