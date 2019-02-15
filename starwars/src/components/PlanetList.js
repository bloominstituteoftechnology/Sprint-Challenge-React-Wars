import React from 'react';
import Planet from './Planet'


const PlanetList = props => {
    console.log(props.planets)
    return (

        <div>
            {props.planets.map( planetInMap => (
                <Planet key={planetInMap.name}
                planetOnProps={planetInMap}/>

            ))};

        </div>
    
    
    
    );
};



export default PlanetList;