import React from 'react';
import Char  from './Char.js'
const CharButton = (props)=> {

console.log(props.nameprops);
  return(

    <div>
      {props.nameprops.map(name => <Char nameprops={name} />)}

    </div>
  );




}
export default CharButton;
