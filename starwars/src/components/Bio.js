import React from 'react';
import BioItems from './BioItems';
        //bio:  name, birth year, height, mass, eye color, hair color, skin color, gender, home world, species

        //list out films that character was presented in


const Bio = (props) => {
    return ( 
        <div className= "character-list">
            {/* {console.log(props.Object.values(biodChar))} */}
             {props.bioChar.map((eachBio, i) => {
                 return (
                    <BioItems key={i} bio={Object.values(eachBio)} />
                 )
             })}        
        </div> 
    );
};

export default Bio;
