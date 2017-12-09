import React from 'react';

const CharacterCard = ({starwarsChar}) => {
return(
    <div>
        <div> name: {starwarsChar.name} </div>
        <div> birth year: {starwarsChar.birth_year} </div>
        <div> height: {starwarsChar.height} </div>
    </div>
);
}

export default CharacterCard;