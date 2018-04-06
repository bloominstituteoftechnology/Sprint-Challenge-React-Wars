import React, { Component } from 'react';
import './App.css';
import { Row, Col, Card, CardHeader, CardFooter, CardTitle, CardSubtitle, CardBody, CardText } from 'reactstrap';

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
        <h1 className="Header">React Wars</h1>
        <Row>
          {this.state.starwarsChars.map((character, index) =>
            <Col key={index}>
              <Card>
                <CardHeader>{character.name}</CardHeader>
                <CardBody className="text-left">
                  <CardText>Born: {character.birth_year}</CardText>
                  <CardText>Gender: {character.gender}</CardText>
                  <CardText>Height: {character.height}</CardText>
                  <CardText>Mass: {character.mass}</CardText>
                  <CardText>Hair color: {character.hair_color}</CardText>
                  <CardText>Eye color: {character.eye_color}</CardText>
                  <CardText>Skin color: {character.skin_color}</CardText>
                </CardBody>
              </Card>
            </Col>
          )};
        </Row>
      </div>
    );
  }
}

export default App;
