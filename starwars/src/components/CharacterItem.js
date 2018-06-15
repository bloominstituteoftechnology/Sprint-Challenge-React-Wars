import React from 'react';
import Content from '../elements/Content'
import CharacterCard from './CharacterCard';
import Button from '../elements/Button'

const CharacterItem = (props) => {
	return (
		<Content display >
			{props.character.name} <Button onClick={()=>{props.handler(props.character.name)}}>{props.character.render ? 'Close': 'Learn More'}</Button>
			{props.character.render && <CharacterCard character={props.character} />}
		</Content>
	);
};

export default CharacterItem;