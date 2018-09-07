import React from 'react';
import Display from './Display.js';
import './StarWars.css';
const StarwarsChar = (props) => {

console.log(props)
return(
  <div className= "Card">
    <button onClick={props.changeInfo}>{props.data.name}</button>
  <div>
<li className={props.classio}>height:{props.data.height}</li>
<li className={props.classio}>mass:{props.data.mass}</li>
<li className={props.classio}>hair_color:{props.data.hair_color}</li>
<li className={props.classio}>skin_color:{props.data.skin_color}</li>
</div>
  </div>
)

}
export default StarwarsChar
