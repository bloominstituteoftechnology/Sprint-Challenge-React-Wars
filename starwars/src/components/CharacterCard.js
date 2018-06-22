import React from 'react';

const CharacterCard= props => {
    return (
        <div>
            {props.getCharacters}
            {props.componentDidMount}
            {props.fetch}
        </div>    
    );
};

export default CharacterCard;