import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
          homeworld: 'https://swapi.co/api/planets/1/',
          films: [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/',
            'https://swapi.co/api/films/7/'
          ],
          species: ['https://swapi.co/api/species/1/'],
          vehicles: [
            'https://swapi.co/api/vehicles/14/',
            'https://swapi.co/api/vehicles/30/'
          ],
          starships: [
            'https://swapi.co/api/starships/12/',
            'https://swapi.co/api/starships/22/'
          ],
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
          url: 'https://swapi.co/api/people/1/'
        }
      ],
      next: 'https://swapi.co/api/people',
      previous: 'https://swapi.co/api/people',
      isLoading: false
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    this.setState(
      {
        isLoading: true
      },
      () => {
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            // console.log(data);
            this.setState({
              starwarsChars: data.results,
              next: data.next,
              previous: data.previous,
              isLoading: false
            });
          })
          .catch(err => {
            throw new Error(err);
          });
      }
    );
  };

  next = () => {
    this.getCharacters(this.state.next);
  };

  previous = () => {
    this.getCharacters(this.state.previous);
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.isLoading ? (
          <div className="App__loading" />
        ) : (
          <div>
            <div className="App__button-panel">
              <button onClick={this.previous} className="App__button">
                {' '}
                &larr; Previous
              </button>
              <button onClick={this.next} className="App__button">
                Next &rarr;
              </button>
            </div>
            <div className="App__card-container">
              {this.state.starwarsChars.map((char, i) => (
                <Card key={i} {...char} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
