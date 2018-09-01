import React from 'react';


function Char(props) {
  console.log('props', props);
  return (
  <div>
    <button>{props.nameprops.name}</button>;

  </div>

  )
}

export default Char;
