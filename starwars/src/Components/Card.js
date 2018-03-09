import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Card.css'
import PropTypes from "prop-types";

const CardImgs = (props) => {
  const post = props.wars;
  return (
    <div className="starWars">
      <Card body inverse style={{ backgroundColor: '#3498db', padding: '30px', alignItems: 'center', borderColor: '#fff' }}>       
          <CardTitle>Name: {post.name}</CardTitle>
          <CardSubtitle>Birth Year: {post.birth_year}</CardSubtitle>
          <CardSubtitle>Height: {post.height}</CardSubtitle>
          <CardSubtitle>Gender: {post.gender}</CardSubtitle>
          <CardSubtitle>Eye Color: {post.eye_color}</CardSubtitle>
          <CardSubtitle>Skin Color: {post.skin_color}</CardSubtitle>               
      </Card>
    </div>
  );
};

CardImgs.defaultProps = {
  cardImg: PropTypes.shape({
    name: "Luke"
  })
};

CardImgs.propTypes = {
  cardImg: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string,    
    hair_color: PropTypes.string
  })
};
    

export default CardImgs;