import React from 'react'
import Character from './Character'

const StarWarsList = props => {
    return (
      
        <ul>
          {props.starwarsChars.map((char, i) => {
            return (

                <Character starwarsChars={props.starwarsChars} index={i} />


            );
          })}
        </ul>
    
    );
  };
  
  export default StarWarsList;
  
