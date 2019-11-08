import React from 'react';

const Chars = (props) => {
    return(
        <div className="peopleCard">
            <h3>Name:{props.person.name}</h3>
            <h2>Age:{props.person.birth_year}</h2>
        </div>
 );
}
export default Chars