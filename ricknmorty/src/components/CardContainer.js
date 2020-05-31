import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import { Jumbotron, Row, Fade } from 'reactstrap';

const CardContainer = ({ data }) => {
	//Apply fade for loading of Cardcontainer
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		setFadeIn(!fadeIn);
	}, []);

	//Render
	return (
		<Jumbotron style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
			{data && (
				<Fade in={fadeIn} timeout={400}>
					<Row>
						{data &&
							data.results.map((char) => {
								return <CharacterCard key={char.id} char={char} />;
							})}
					</Row>
				</Fade>
			)}
		</Jumbotron>
	);
};

export default CardContainer;
