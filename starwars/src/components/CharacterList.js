import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';
import './CharacterList.css';

const CharacterList = props => {
  return (
    <div className="characterListContainer">
      <Card body inverse style={{backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>{props.characters.name}</CardTitle>
          <CardText><span>Gender: </span>{props.characters.gender}</CardText>
          <CardText><span>DOB: </span>{props.characters.birth_year}</CardText>
          <CardText><span>Height: </span>{props.characters.height}</CardText>
      </Card>
    </div>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    birth_year: PropTypes.string,
    height: PropTypes.string
  }))
};

export default CharacterList;