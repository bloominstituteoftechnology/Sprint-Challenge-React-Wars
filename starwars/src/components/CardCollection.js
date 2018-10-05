import React from 'react';
import Card from "./Card.js";


const CardCollection = props => {
 let cardArray = props.starwarsChars.map(item => {
    return <Card name = {item.name} birth_year = {item.birth_year} key={item.created}/>; 
   }   
);

return <div className="cardCollection">
    {cardArray}
    </div> 
 };

  
  export default CardCollection;
  