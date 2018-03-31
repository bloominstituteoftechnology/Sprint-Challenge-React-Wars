import React from 'react';

const SWContainer = (props) => {
    return <h1>{props.starwarsChars.length === 0 ? "Updating, Please wait..." : `${props.starwarsChars[0].name}`}!</h1>
};

export default SWContainer;