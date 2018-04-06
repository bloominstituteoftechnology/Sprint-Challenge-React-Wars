import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import PeopleList from './peoplelist.js'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import  Tron  from './jumbotron.js'


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

  }
  render() {
    return (
      <Container className="App">

        <h1 className="Header">React Wars</h1>
        <Tron />

        <PeopleList {...this.state} />
      </Container>
    );
  }
}

export default App;
