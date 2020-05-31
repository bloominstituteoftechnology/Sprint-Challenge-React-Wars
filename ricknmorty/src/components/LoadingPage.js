import React from 'react';
import { Spinner, Jumbotron } from 'reactstrap';

const LoadingPage = () => {
	return (
		//Renders a Loading Page
		<Jumbotron
			fluid
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-evenly',
			}}
		>
			<Spinner
				color='danger'
				style={{ width: '15rem', height: '15rem' }}
				type='grow'
			/>
			<h1>Loading...</h1>
		</Jumbotron>
	);
};

export default LoadingPage;
