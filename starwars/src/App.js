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

  nextPage = () => {
    const { page } = this.state;
    fetch(`${API}?page=${page + 1}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results, page: page + 1 });
      })
      .catch(err => {
        console.log(err);
        throw new Error(err);
      });
  };

  prevPage = () => {
    const { page } = this.state;
    if (page !== 1)
      fetch(`${API}?page=${page - 1}`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({
            starwarsChars: data.results,
            page: page - 1
          });
        })
        .catch(err => {
          console.log(err);
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
          <Pagination>
            {page === 1 ? '' : <button onClick={prevPage}>PREV</button>}
            <button onClick={nextPage}>NEXT</button>
          </Pagination>
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

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  button,
  span {
    background: white;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    margin: 0;
    border-style: none;
  }

  *:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  *:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-right: 1rem;
  }
`;
