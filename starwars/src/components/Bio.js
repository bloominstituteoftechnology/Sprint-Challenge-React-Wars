import React from 'react';
import BioItems from './BioItems';
        //bio:  name, birth year, height, mass, eye color, hair color, skin color, gender, home world, species

        //list out films that character was presented in


const Bio = (props) => {
    return ( 
        <div>
            {console.log(props.bioChar[0])}
             {props.bioChar.map((eachBio, i) => {
                 return (
                    <BioItems key={i} bio={eachBio.name} />
                 )
             })}        
        </div> 
    );
};

export default Bio;
