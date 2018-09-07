import React from 'react';
import StarwarsCharsDisplay from  './StarwarsCharsDisplay'

const StarwarsChars = props =>{

    return(

        <ul>
            {props.starwarsChars.map(starwarschar => {

            <StarwarsCharsDisplay 
                char={starwarschar} 
                key={starwarschar.created}> 

                {starwarschar.name}

            </StarwarsCharsDisplay> 
            } )
            
            
            }

            </ul>
    );

};


export default StarwarsChars;