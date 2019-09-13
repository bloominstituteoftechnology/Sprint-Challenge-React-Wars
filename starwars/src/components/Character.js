import React from 'react'

const Character = (props) => (
    <div className='character'> 
      <div className='characterName'>{props.name}</div>
      <div className='birth_year'> birth year: {props.birth_year} </div>
    </div>
 )

    export default Character