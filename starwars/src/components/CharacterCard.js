import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './CharacterCard.css';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  
  return (
    
      <Card>
        <CardBody>
          <CardTitle>{props.character.name}</CardTitle>
          <CardText>Was born: {props.character.birth_year}</CardText>
          <CardText>Gender: {props.character.gender}</CardText>
          <CardText>Height: {props.character.height}cm</CardText>
          <CardText>Weight: {props.character.mass}kg</CardText>
        </CardBody>
        
      </Card>
    
  );
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