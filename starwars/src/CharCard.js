import React from 'react';
import './CharCard.css';
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const CharCard = props => {
  return (


    <div className="StarWarsCharacters">
    	<div className="Name"> {props.name} </div>
    	<div className="Stats">
    	<div className="TopStats">
    	<p>Gender: {props.gender} </p>
    	<p>Mass: {props.mass} </p>
    	<p>Height: {props.height} </p>
    	</div>
    	<div className="BtmStats">
    	<p>Eye Color: {props.eye_color} </p>
    	<p>Hair Color: {props.hair_color} </p>
    	<p>Skin Color: {props.skin_color} </p>
    	</div>
    	</div>
    </div>
  )};



export default CharCard;