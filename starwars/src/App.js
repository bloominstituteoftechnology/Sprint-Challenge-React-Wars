import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import CharCard from './components/CharCard';

const CharContainerStyles = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  min-width: 1000px;
`

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
        <CharContainerStyles>
          {this.state.starwarsChars.map((char, i) => {
            return (
              <CharCard 
              key={i}
              char={char}
              />
            )
          })}
        </CharContainerStyles>
          <div className="Header">REACT WARS</div>
      </div>
    );
  }
}

export default App;
