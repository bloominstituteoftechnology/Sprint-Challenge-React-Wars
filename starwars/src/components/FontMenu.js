import React from 'react';
import './StarWars.css';

const FontMenu = props => {
  return(
    <div className="font-menu">
      {props.fonts.map(font => <div className={`font ${font.font}`} onClick={()=> props.selectFont(font.font)}>{font.display}</div>)}
    </div>
  )
}

export default FontMenu;
