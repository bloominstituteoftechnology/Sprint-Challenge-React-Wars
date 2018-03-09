import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import CharacterComponent from "./components/CharacterComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsPlanets: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch("https://swapi.co/api/people")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });

    fetch("https://swapi.co/api/planets")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsPlanets: data.results });
      });
  }
  render() {
    return (
      <div className="app-wrapper">
        <Container className="app-content">
          <Row>
            <Col sm={12} className="text-center">
              <h1 className="Header">React Wars</h1>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            {this.state.starwarsChars.map(char => {
              return <CharacterComponent key={char.count} char={char} />;
            })};
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
