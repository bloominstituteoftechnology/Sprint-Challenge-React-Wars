import React, { Fragment } from 'react';
import StarWars from '../components/StarWars';
import './StarWars.css';
import StarWarsProfile from './StarWarsProfile';

const StarWarsCards = props => {
return (
    <div className="container">
      {props.starwarsChars.map(starwarsCharInMap => 
       <StarWars starwarsOnProps={starwarsCharInMap}/>
       
      )}
    </div>
  );
}



export default StarWarsCards;


