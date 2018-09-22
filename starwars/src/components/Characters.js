import React from 'react';
import Char from './Char';

const Characters = (props) => {
    return ( 
        <div>
            <div>
                {props.chars.map(char => <Char key={char.name} char={char} />)}</div>
            </div>
     );
}
 
export default Characters;