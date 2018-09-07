import React from 'react';
import Display from './Display.js'

const StarwarsChar = (props) => {

console.log(props)
return(
  <div>
    <h4>{props.data.name}</h4>
  
<li>height:{props.data.height}</li>
<li>mass:{props.data.mass}</li>
<li>hair_color:{props.data.hair_color}</li>
<li>skin_color:{props.data.skin_color}</li>

  </div>
)

}
export default StarwarsChar
