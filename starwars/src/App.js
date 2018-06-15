import React, { Component } from 'react';

import CharacterList from './components/CharacterList';
//import styling
import './App.css';
import Container from './elements/Container'


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
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

  addRenderProp = (name) =>{
    let list = this.state.starwarsChars.slice();

    list = list.map(char=>{
      if (char.name === name){
        char.render = !char.render;
      }
      return char;
    })
    this.setState({starwarsChars: list})
  }

  render() {
    return (
      <Container app>
        <h1 className="Header">React Wars</h1>
        <CharacterList handler={this.addRenderProp} list={this.state.starwarsChars}/>
      </Container>
    );
  }
}

export default App;
