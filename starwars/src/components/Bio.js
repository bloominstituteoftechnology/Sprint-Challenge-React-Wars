import React from 'react';
import BioItems from './BioItems';

const Bio = (props) => {
    return ( 
        //bio:  name, birth year, height, mass, eye color, hair color, skin color, gender, home world, species

        //list out films that character was presented in
        <div>
            {console.log(props.bioChar[0]."films")};

            {/* {props.bioChar.map((eachBio, i) => {
                console.log(i, eachBio[i].name) 
            })} */}
        </div> 
    );
};

export default Bio;
