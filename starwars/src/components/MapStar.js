// this component will take the state from app.js as a prop and form it up 
import React from 'react';

const Mapstar = (props) => {
    const ar = []
    const loop = props.charaterInfo.starwarsChars.map(i => i.name)
    let list = loop.forEach(element => {
        return console.log(element)
      
    });
    
  return (
 <div class= "names">
     <h1>{ar.forEach(e => e)}</h1>
 </div>
  )
}

export default Mapstar;