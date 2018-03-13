import React, { Component } from 'react';
import './App.css';
import CharList from './CharList.js';
import { Row, Col, Container } from 'reactstrap';

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
      <div className="app-container">
        <Container className="app-content">
          <Row className="pt-3 xs-2">
            <Col xs="12"> 
              <h1 className="Header d-flex justify-content-center">React Wars</h1>
            </Col>
          </Row>
          <Row className="CharDetails">
            {this.state.starwarsChars.map((character, index) => <CharList character={ character } key={ index } />)}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;