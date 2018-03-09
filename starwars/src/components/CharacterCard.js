import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './CharacterCard.css';
import PropTypes from 'prop-types';

class CharacterCard extends Component {
  constructor(props) {
    super(props)
      this.state = {
        species: {},
        movies: [],
        listOfMovies: ''
      }
  }
  listOfFilms = () => {
    
    const list = this.state.movies.map(movie => {
      console.log('title', movie.title)
      return movie.title;
    }).join(', ');
    return list;
    // this.setState({ listOfMovies: list })
  }
  
  componentDidMount() {
    fetch(this.props.character.species[0])
      .then(res => {

        return res.json();
      })
      .then(data => {
        
        this.setState({ species: data });
      })
      .catch(err => {
        throw new Error(err);
      });

      let filmsArr = [];

      this.props.character.films.forEach(film => {
        fetch(film)
        .then(res => {
  
          return res.json();
        })
        .then(data => {
          filmsArr.push(data)
          this.setState({ movies: filmsArr });
        })
        .catch(err => {
          throw new Error(err);
        });        
      })
      console.log('films', filmsArr)
      this.listOfFilms();
      
  }
  
  render() {
    return (
      
        <Card>
          <CardBody>
            <CardTitle>{this.props.character.name}</CardTitle>
            <CardText>Was born: {this.props.character.birth_year}</CardText>
            <CardText>Gender: {this.props.character.gender}</CardText>
            <CardText>Height: {this.props.character.height}cm</CardText>
            <CardText>Weight: {this.props.character.mass}kg</CardText>
            <CardText>Species: {this.state.species.name}</CardText>
            <CardText>Film Titles: {this.listOfFilms()}</CardText>
          </CardBody>
          
        </Card>
      
    );
  }
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  birth_year: PropTypes.string,
  gender: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  species: PropTypes.arrayOf(PropTypes.string)
}

export default CharacterCard;