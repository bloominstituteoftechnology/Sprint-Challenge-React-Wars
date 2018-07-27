import React from 'react';
import CardInfo from './CardInfo';

const CardList = props => {
    return(
        
 <div className="card-list">
      {props.characters.map(character =>
         <CardInfo character={character} />)}
    </div>
       
    )
}

export default CardList;