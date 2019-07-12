import React from 'react';
import Character from '../components/Character';

const CharacterList = ({characters}) => {
    return (
        <div>
            {characters.map((char, i) => <Character character={char} key={i} />)}
        </div>
    );
};

export default CharacterList;