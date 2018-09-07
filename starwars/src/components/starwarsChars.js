import React from 'react';
import './StarwarsCharsDisplay'

const StarwarsCharsDisplay = props =>{

    return(

        <div>
            props.starwarsChars.map( char => <StarwarsCharsDisplay starwarsChar={char} /> )
        </div>
    );
}