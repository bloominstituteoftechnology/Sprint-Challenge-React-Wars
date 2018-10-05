import React from 'react';
import Character from './Character';
import './CharacterList.css';

 const CharacterList = props => {
    return <ul className = "list">{props.starwarsChars.map((char) => <Character char={char} />)}</ul>
}
 export default CharacterList; 