import React from 'react';

function Char(props) {
  console.log('props', props);
  return <button>{props.nameprops.name}</button>;
}

export default Char;
