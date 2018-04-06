import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import { Container, Row } from 'reactstrap';

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
    return <div className="App">
        <h1 className="Header">React Wars</h1>
        <h3>List of Star Wars Characters</h3>
        <Container>
          <Row>
            {this.state.starwarsChars.map((char, i) => (
              <CharacterList
                key={`${char.name}'s info`}
                characters={char}
                md="6"
              />
            ))}
          </Row>
        </Container>
      </div>;
  }
}

export default App;
