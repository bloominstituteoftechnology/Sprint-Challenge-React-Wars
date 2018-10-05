import React from 'react';
import StarwarsCharsDisplay from  './starwarsCharDisplay'

const StarwarsChars = props =>{

    //console.log(props);

    return(

        <ul className='character-list'>
            {props.starwarsChars.map(starwarsChar => {

         return  ( <StarwarsCharsDisplay 
            
                key={starwarsChar.created}
                char={starwarsChar}

            /> 
     ) } )
            
            
            }

            </ul>
    );

};


export default StarwarsChars;