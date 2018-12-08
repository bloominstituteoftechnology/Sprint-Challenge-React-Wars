import React from 'react';

const Characters = props =>{
    return (
    <info>
      <h1 className = "name"> {props.characters.name}</h1>  
      <h3 className = "bio">
      Gender: {props.characters.gender},
      Hair color: {props.characters.hair_color}
      Height: {props.characters.hight}
      </h3>  
    </info>  
    )
}
export default Characters;