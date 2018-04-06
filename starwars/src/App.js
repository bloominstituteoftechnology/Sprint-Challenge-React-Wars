import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import PeopleList from './peoplelist.js'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import jumbotron from './jumbotron.js'


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
        <Jumbotron>
             <h1 className="display-3">Hello, world!</h1>
             <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
             <hr className="my-2" />
             <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
             <p className="lead">
               <Button color="primary">Learn More</Button>
             </p>
           </Jumbotron>)
        <PeopleList {...this.state} />
      </Container>
    );
  }
}

export default App;
