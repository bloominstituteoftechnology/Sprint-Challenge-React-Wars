import React from 'react';
import './StarwarsChars'

const StarwarsCharsDisplay = props =>{

    return(

        <li>
            {props.char}
        </li>
    );
}

export default StarwarsCharsDisplay;