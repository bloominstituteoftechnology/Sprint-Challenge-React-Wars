import React from 'react';

function StarWarsData(props){
      {props.starwarsChars.map(char => {
        return <Card/>
      })}
 }

// export default StarWarsData;