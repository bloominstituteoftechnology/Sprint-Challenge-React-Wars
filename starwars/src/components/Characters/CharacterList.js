import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
	return (
		<div>
			{props.list.map((character) => {
				return (
					<Character
						key={character.edited}
						name={character.name}
						gender={character.gender}
						birthyear={character.birth_year}
						eyecolor={character.eye_color}
						haircolor={character.hair_color}
						mass={character.mass}
						height={character.height}
            			selected={props.selected}
					/>
				);
			})};
	
		</div>
	);
};

export default CharacterList;
