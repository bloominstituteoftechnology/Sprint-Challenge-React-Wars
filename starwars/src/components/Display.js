import React from 'react';


function Display(props) {
  console.log('props', props);
  return (
  <div>
    <ul>
      <li>Name:{props.height.name}</li>
      <li>Height:{props.height.height}</li>
      <li>Weight:{props.height.mass}kg</li>
      <li>Hair Color:{props.height.hair_color}</li>
    </ul>

      </div>



  )
}

export default Display;
