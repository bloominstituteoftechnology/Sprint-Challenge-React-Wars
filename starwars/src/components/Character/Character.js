import React from 'react';

import CharacterName from './CharacterName';

const Character = props => {
    return (
        <CharacterName character={props.character} characterImage={props.characterImage} />
    );
}

export default Character;