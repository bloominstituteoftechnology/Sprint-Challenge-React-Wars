import React, { Fragment } from 'react';



const StarWarsProfile = props => {
    return (
    
    <Fragment>
    <h2>{props.starwarsOnProps.name}</h2>
    <h2>{props.starwarsOnProps.homeworld}</h2>
    <h2>{props.starwarsOnProps.homeworld}</h2>
    <h2>{props.starwarsOnProps.homeworld}</h2>
    </Fragment>
   );
};


export default StarWarsProfile; 
