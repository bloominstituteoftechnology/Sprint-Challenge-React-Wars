import React from 'react';
import Character from './Character';

function CharThings (props) {
    return (
        <div className="charThings">
            {props.starwarsChars.map(char => {
                return <Character char={char} />;
            })}
        </div>
    );
}

export default CharThings; 