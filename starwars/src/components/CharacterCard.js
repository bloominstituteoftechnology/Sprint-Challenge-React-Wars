import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './CharacterCard.css';
import PropTypes from 'prop-types';

class CharacterCard extends Component {
  constructor(props) {
    super(props)
      this.state = {
        species: {},
        movies: []
      }
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
          
        })
        .catch(err => {
          throw new Error(err);
        });        
      })
      console.log('films', filmsArr)
      this.setState({ movies: filmsArr });
      
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