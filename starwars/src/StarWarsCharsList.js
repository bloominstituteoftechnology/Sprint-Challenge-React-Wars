import React from 'react';
import './StarWarsCharsList.css';
import StarWarsChar from './StarWarsChar';

const StarWarsCharsList = props => {
    return (
      <div className="People-Wrapper">
        {props.starwarsChars.map((starwarsChar) => {
          return <StarWarsChar key= {starwarsChar.name} />;
        })}
      </div>
    );
  };
  
  export default StarWarsCharsList;