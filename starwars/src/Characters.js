import React from 'react';
import { Card } from 'react-bootstrap';
import './Characters.css'

// import PropTypes from "prop-types";




const Characters = props => {
    console.log("Props", props);
return (
    <div class="row justify-content-center">
    <div class="card col-6 justify-content">
          <div className="char-name">{props.char.name}</div>
          <div className="description">{props.char.gender}</div>
          <div className="description">{props.char.height}</div>
          <div className="description">{props.char.birth_year}</div>
      
    </div>
    </div>
)
}

export default Characters;