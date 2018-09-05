import React from 'react';


const CharInfo= props => {
    return (
        <div>
            {props.starwars.name}
            {/*.starwars ^^ here, has to refer to the starwars that you named in CharacterCard.js on line 7*/}

        </div>
    );
};

export default CharInfo;

