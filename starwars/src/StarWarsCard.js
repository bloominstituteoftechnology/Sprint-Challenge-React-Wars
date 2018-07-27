import React from'react';
import StarWarsInfo from './StarWarsInfo.js';
const StarWarsCard=props=>{
  return (
    props.starProp.map(info=><StarWarsInfo starInfo={info} key={info.name}/>)
  )
}
export default StarWarsCard;