import React, { Fragment } from 'react';
import StarWars from '../components/StarWars'



const StarWarsCards = props => {
return (
    <div>
      {props.starwarsChars.map(starwarsCharInMap => 
       <StarWars starwarsOnProps={starwarsCharInMap}/>
      )}
    </div>
  );
}



export default StarWarsCards;