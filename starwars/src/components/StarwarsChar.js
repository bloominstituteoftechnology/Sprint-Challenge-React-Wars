import './Starwars.css';
import React from 'react';
// import StarwarsCharProp from './StarwarsChars';

const StarwarsChar = props => {
    // console.log(props.starwarsChar);
    return (
        <div className='starwarsChar'>
            <p>{props.starwarsChar.values}</p>
            {/* {props.starwarsChar.values.map( starwarsCharProp => {
                console.log(starwarsCharProp);
                return (
                    <StarwarsCharProp starwarsCharProp={starwarsCharProp} />
                )
            })} */}
        </div>
        
    );
}

export default StarwarsChar;