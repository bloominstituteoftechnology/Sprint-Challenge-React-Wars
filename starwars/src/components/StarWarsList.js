import React from 'react'
import Character from './Character'
import './StarWars.css'

const StarWarsList = props => {
    return (
      
        <div className={"list-container"}>
          {props.starwarsChars.map((char, i) => {
            return (

                <Character starwarsChars={props.starwarsChars} index={i} />


            );
          })}
        </div>
    
    );
  };
  
  export default StarWarsList;
  
