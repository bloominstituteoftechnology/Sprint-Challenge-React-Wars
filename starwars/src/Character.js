
import React from 'react';
import Character from './CharInfo'

const Character= props => {
    return (
        <div>
            {props.data.map(item => 
                <CharInfo characterData={item} />
            )}    
        </div>
    );
};

export default Character;