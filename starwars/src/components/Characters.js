import React from 'react';
import CharacterCards from './CharacterCards.js';
import Header from './Header.js';

const Characters = (props) => {
		return (
			<div>
			  <Header header={props.header}/>
			  <CharacterCards>
				
			  </CharacterCards>
			</div>	
		);
}

export default Characters;