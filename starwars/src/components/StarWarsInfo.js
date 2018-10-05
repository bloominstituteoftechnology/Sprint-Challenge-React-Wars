import React from 'react';

function StarWarsInfo(props){
    {props.starwarsChars.map(char => { return <Card />})}
};
export default StarWarsInfo;