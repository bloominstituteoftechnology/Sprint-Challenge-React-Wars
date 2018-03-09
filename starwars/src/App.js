import React, { Component } from 'react';
import './App.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class App extends Component {
  state = {
    starwarsChars: []
  }

  componentDidMount() {
    console.log("CDM called: ", this.state.starwarsChars);
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
    console.log("Render called: ", this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
          <Card>
            <CardBody>
              <CardText>Name: {this.state.starwarsChars.map((character, index) => {
                return <Card key={index} character={character} />;
                })}
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
