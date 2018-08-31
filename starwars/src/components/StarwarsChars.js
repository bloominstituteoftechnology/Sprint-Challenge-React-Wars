import './Starwars.css';
import React from 'react';
import StarwarsChar from './StarwarsChar';

const StarwarsChars = props => {
    // console.log(props.starwarsChars);
    return (
        <div className='starwarsChars'>{ 
            props.starwarsChars.map( starwarsChar => {
                console.log(starwarsChar);
                return (
                    <StarwarsChar key={starwarsChar.name} starwarsChar={starwarsChar} />
                )
        })
        }
            
        </div>
    
  
    )
}
    
export default StarwarsChars;