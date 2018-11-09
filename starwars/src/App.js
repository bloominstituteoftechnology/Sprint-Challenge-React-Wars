import React, { Component } from 'react';
import './App.css';
import CharCard from './components/CharCard';
import styled from 'styled-components';

const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;

  h1 {
    cursor: pointer;
    border: 1px solid black;
    border-radius: 7px;
    padding: 5px 20px;
    background-color: lightgray;
    opacity: 0.8;
  }
`


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: null,
      prevPage: null
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
        this.setState({ starwarsChars: data.results, nextPage: data.next, prevPage: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <AppContainer className="App">
        <h1>Star Wars Characters!</h1>
        <ButtonContainer>
          <h1 onClick={this.state.prevPage === null ? 
            console.log('no previous page listed') : ()=> this.getCharacters(this.state.prevPage)}>Previous Page</h1>
          <h1 onClick={this.state.nextPage === null ? 
            console.log('no next page listed') : ()=> this.getCharacters(this.state.nextPage)}>Next Page</h1>
        </ButtonContainer>

          <CardHolder>
            {this.state.starwarsChars.map(char=> (
              <CharCard character={char} key={char.created}/>
              ))}
          </CardHolder>
      </AppContainer>
    );
  }
}

export default App;
