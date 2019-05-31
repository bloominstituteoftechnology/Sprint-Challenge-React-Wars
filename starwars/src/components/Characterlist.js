import React from 'react';

import Characters from './Characters';

//step 2. create character list. Map over characters recieved as props from app 



const Characterlist = props => {
    return (
        <div className = "list">

        {props.starwarsChars.map(charactersfrommap => {
            return <Characters characters = {charactersfrommap}/>
        })}

        </div>
    );
};

export default Characterlist;




// array maps over one student at a Time =>

// for each individual in the array we are going to render 

// and 'Individual' component (we need to pass in )

//map is building a brand new array. Whatever we return out of the map function, 
// is what gets added to the array for each element




