import React from 'react';


function Display(props) {
  console.log('props', props);
  return (
  <div>
    <li>{props.height.height}</li>

  </div>

  )
}

export default Display;
