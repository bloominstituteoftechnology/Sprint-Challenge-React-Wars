import React from 'react';
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import HomeWorld from './HomeWorld';
import PropTypes from 'prop-types';


const Character = (props) => {
  return (
    <Col sm="4" xs="6">
      <Card>
        <CardBody>
          <CardTitle>{ props.char.name }</CardTitle>
          <CardText>Gender: { props.char.gender !== "n/a" ? props.char.gender : "unknown" }</CardText>
          <CardText>Hair Color: { props.char.hair_color !== "n/a" ? props.char.hair_color : "unknown" }</CardText>
          <CardText>Eye Color: { props.char.eye_color }</CardText>
          <CardText>Birth Year: { props.char.birth_year }</CardText>
          <CardText>Height: { props.char.height }</CardText>
          <CardText>
            Home World: <HomeWorld url= { props.char.homeworld } />
          </CardText>
          <CardText>Mass: { props.char.mass }</CardText>
          <CardText>Skin Color: { props.char.skin_color }</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}

Character.propTypes = {
  char: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    birth_year: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    skin_color: PropTypes.string
  }) 
}

export default Character;