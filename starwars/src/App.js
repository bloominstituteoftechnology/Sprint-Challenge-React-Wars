import React, { Component } from 'react';
import './App.css';
import {Card} from './components/Card/Card.js';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      logo:"https://vignette.wikia.nocookie.net/starwars/images/2/2e/Imperial_Emblem.svg/revision/latest/scale-to-width-down/480?cb=20080220004323"
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
        console.log(this.state.starwarsChars);
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <div>
          <Grid>
            <Row className="show-grid">
              <Col xs={4}md={4}lg={4}>
                <img src={this.state.logo} alt="logo" />
              </Col>
              <Col xs={8}md={8}lg={8}>
                <h1 className="Header">Imperial Database</h1>
              </Col>
            </Row>
          </Grid>
        </div>

        {this.state.starwarsChars.map( (e,i) =>{
          return <Card birthYear={e.birth_year}gender={e.gender}hairColor={e.hair_color}key={i} name={e.name} />;
        })
        }
      </div>
    );
  }
}

export default App;
