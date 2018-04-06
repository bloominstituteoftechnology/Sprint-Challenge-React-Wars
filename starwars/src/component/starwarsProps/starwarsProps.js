import React from 'react';
import CharInfo from '../CharInfo/CharInfo.js';
import PropTypes from 'prop-types';

const StarWarsProps = props => {
    console.log("props", props); //check if props are loading

    // if length of array for the props is at 0 (essentially preMount), display "loading list"; else load 'CharInfo' (postMount)
    return <div>{
        props.starwarsChars.length === 0 ? 
        <div><img src="https://pa1.narvii.com/6447/98be1b127ac157c5b619cb9b8e654ae9e1476d80_hq.gif" /></div> : <div>{props.starwarsChars.map((content, index) => (<CharInfo keys={index} starwarsData={content} />))}</div>
    }</div> // return 
}

StarWarsProps.propTypes = {
    StarWarsProps: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
    })))
};

export default StarWarsProps;