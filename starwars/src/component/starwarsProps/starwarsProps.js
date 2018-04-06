import React from 'react';
import CharInfo from '../CharInfo/CharInfo.js';

const StarWarsProps = props => {
    console.log("props", props); //check if props are loading
    // console.log("Luke's props", props.starwarsChars[0]); // check if luke's prop is loading

    // if length of array for the props is at 0 (essentially preMount), display "loading list"; else load 'Casts' (postMount)
    return <div>{
        props.starwarsChars.length === 0 ? 
        <div><img src="https://pa1.narvii.com/6447/98be1b127ac157c5b619cb9b8e654ae9e1476d80_hq.gif" /></div> : <div>{props.starwarsChars.map((content) => (<CharInfo starwarsData={content} />))}</div>
    }</div> // return 
}

export default StarWarsProps;