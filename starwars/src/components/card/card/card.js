import React from 'react'
import Data from './characterData';
import Bio from './bio/characterBio';

export default (props) => {
  return (
    <div>
      <h2>{props.char.name}</h2>
      <Data data={props.char}/>
      <Bio bio={props.char}/>
    </div>
  )
}
