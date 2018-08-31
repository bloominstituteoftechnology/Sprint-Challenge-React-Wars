import React from 'react';
import StarCharCard from './StarCharCard';


function StarCharList(props) {
    return(
        <ul className="newCharacter" >{props.starwarsItem.map(item => <StarCharCard item={item} name={item.name} gender={item.gender} affiliation={item.addAffiliation} />)} </ul>
    );
};


export default StarCharList;