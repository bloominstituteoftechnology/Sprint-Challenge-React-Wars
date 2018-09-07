import React from 'react';
import StarwarsCharsDisplay from  './StarwarsCharsDisplay'

const StarwarsChars = props =>{

    return(

        <ul>
            {props.starwarsChars.map(starwarsChar => {

            <StarwarsCharsDisplay 
            
                key={starwarsChar.created}
                char={starwarsChar}

            /> 
            } )
            
            
            }

            </ul>
    );

};


export default StarwarsChars;