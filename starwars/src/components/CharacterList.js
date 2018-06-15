import React from 'react';

import CharacterItem from './CharacterItem'

import Content from '../elements/Content'

const CharacterList = (props) => {
	return (
		<Content >
			{
				props.list.map(character=>{
					return (
						<CharacterItem handler={props.handler} key={character.name} character={character} />
					)
				})
			}
		</Content>
	);
};

export default CharacterList;