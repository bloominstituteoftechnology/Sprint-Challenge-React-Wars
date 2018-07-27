import React from 'react';
import GalaxyFolks from './GalaxyFolks.js';

const CharList = props => {
    return(
        <div className = "char-list">
        {props.starwarsChars.map( jedi => 
          <GalaxyFolks 
          key={jedi.name}  
         jedi={jedi} 
         height={jedi.height} 
          birth={jedi.year}
         />
        )}
    </div>
    );
};


export default CharList;