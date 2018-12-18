import React from 'react';
import Character from './Character'

const Characters = props => {
    return (
        <div>
            {props.data.map(item => 
                <Character characterData={item} />
            )
            }    
        </div>
    );
};

export default Characters;