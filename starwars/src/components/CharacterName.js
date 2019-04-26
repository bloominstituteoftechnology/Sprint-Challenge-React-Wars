import React from 'react';
import './StarWars.css';

class CharacterName extends React.Component {
    render() {
        return (
            <h1 className='character-name'>{this.props.characterName}</h1>
        )
    }
}

export default CharacterName;