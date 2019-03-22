import React, { Component } from 'react';
import Character from './components/Character';
import styled from 'styled-components';
import './App.css';

const API = 'https://swapi.co/api/people';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1
    };
  }

  componentDidMount() {
    const { page } = this.state;
    this.getCharacters(page);
  }

  getCharacters = PAGE => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(API)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const { starwarsChars, page } = this.state;
    const { prevPage, nextPage } = this;

    const StarWarsCharacters = () =>
      starwarsChars.map((char, index) => <Character key={index} {...char} />);

    return (
      <div className="App">
        <Container>
          <h1 className="Header">React Wars</h1>
          <Grid>
            <StarWarsCharacters />
          </Grid>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 60%;
  margin: 0 auto;
`;

const Grid = styled.div`
  /* background: #bada55; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  justify-content: space-evenly;
  margin: 1rem;
`;
