import React from 'react';
import './StarWars.css';
import Card from './Card';


const CardList = props => {
  return(
    <div className="CardList">
      {props.characters.map((character,index) =>(
        <Card
        key = {index}
        character = {character} />
      ))}
    </div>
  );
};


export default CardList;
