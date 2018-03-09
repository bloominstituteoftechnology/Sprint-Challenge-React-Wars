import React from 'react';
import './Card.css'
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.css';

const CardImgs = (props) => {
  const post = props.wars;
  return (
    <div>
      <div className="starWars">
        <div>       
            <div>Name: <strong>{post.name}</strong></div>
            <div>Birth Year: {post.birth_year}</div>
            <div>Height: {post.height}</div>
            <div>Gender: {post.gender}</div>
            <div>Eye Color: {post.eye_color}</div>
            <div>Skin Color: {post.skin_color}</div>               
        </div>
      </div>
    </div>
  );
};

CardImgs.defaultProps = {
  cardImgs: PropTypes.shape({
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