import React from 'react';
import Char from './Char';

const StarwarsChars = props => {
    return ( 
    <div>
    {props.chars.map(char => <Char key={char.name} char={char} />)}
    </div>
     );
}
 
export default StarwarsChars;