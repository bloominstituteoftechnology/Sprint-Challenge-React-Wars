// this component will take the state from app.js as a prop and form it up 
import React from 'react';


function Star (props) {
    console.log(props)
    const loop = props.charaterInfo.starwarsChars.map(i => i)

    return (
      <div>
        {loop.map((item, index) => (

<div class="card">
<div class="card-body">
<h1>{item.name}</h1>
<h3>{item.height} inches</h3>
<h1>Hair Color: <strong>{item.hair_color}</strong></h1>
</div>
</div>
        
        ))}
      </div>
    );
  }

export default Star