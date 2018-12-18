import React from 'react';
import Character from './Character'

const Characters = (props) => {
    var characterData = [props.data];
    return (
        <div>
            {characterData.map}
            <Character />
        </div>
    );
};

export default Characters;