import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './App.css';
import './components/CardContainer/CardContainer.css';
import Films from './components/Films/Films.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: null,
      films_lookup: null
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
    fetch('https://swapi.co/api/films')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ films_lookup: this._filter_films(data.results)});
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  _filter_films = films => {
    return films.reduce(function(obj, film) {
       obj[film.url] = film.title;
       return obj; 
    }, {});
  }


  render() {
    const { starwarsChars, films_lookup } = this.state;
    return (
      <div className="App">
      <h1 className="Header">STAR WARS PHONEBOOK</h1>
        <div className="card-container">
          {starwarsChars && films_lookup ? (
            starwarsChars.map(i => {
              return (
                <Card key={i.name}>
                  <CardBody>
                    <CardTitle>{i.name}</CardTitle>
                    <CardSubtitle>{`Born: ${i.birth_year}`}</CardSubtitle>
                    <Films films={i.films} films_lookup={films_lookup} />
                  </CardBody>
                </Card>
              );
            })
          ) : (null)
          }
        </div>
      </div>
    );
  }

}


export default App;
