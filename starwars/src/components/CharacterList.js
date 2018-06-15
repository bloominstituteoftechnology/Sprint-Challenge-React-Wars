import React from 'react';

import CharacterItem from './CharacterItem'

import Content from '../elements/Content'
import ListContainer from '../elements/ListContainer'

const CharacterList = (props) => {
	return (
		<ListContainer >
			{
				props.list.map(character=>{
					return (
						<CharacterItem handler={props.handler} key={character.name} character={character} />
					)
				})
			}
		</ListContainer>
	);
};

export default CharacterList;