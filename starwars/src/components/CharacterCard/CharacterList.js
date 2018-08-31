import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
    
    return (
        
        <div className = 'list-container'>
            {props.characters.map(character => <CharacterCard key={character.name} character = {character} characteritem= {props.characteritem} displayCard = {props.displayCard}/>)}
        </div>
    );
    
}

export default CharacterList;