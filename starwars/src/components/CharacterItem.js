import React from 'react';
import Content from '../elements/Content'
import CharacterCard from './CharacterCard';

const CharacterItem = (props) => {
	return (
		<Content display onClick={()=>{props.handler(props.character.name)}}>
			{props.character.name}
			{props.character.render && <CharacterCard character={props.character} />}
		</Content>
	);
};

export default CharacterItem;