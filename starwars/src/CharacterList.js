import React from 'react';
import CharCard from './CharCard';
import './CharacterList.css'

const CharacterList = props => {
    return (
        <div className="CardsList-Wrapper">
            {props.chars.map(char => {
                return <CharCard key={char.url} char={char} />;
            })}
        </div>
    );
};

export default CharacterList;