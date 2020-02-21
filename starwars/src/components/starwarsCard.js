import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
	margin: 0px auto;
	width: 100%;
	border-top: .5px grey solid;
	border-bottom: .5px grey solid;

`

const Card = styled.div`
	width: 100%;
	align-items: center;
	color: white;
	margin: 25px 0px;
	padding: 15px 0px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const StarwarsCard = (props) => {
	//console.log(props);

	return(
		<Row>
			<Card>
				<h1>{props.data.name}</h1>
				<h3>Birth Year: {props.data.birth_year}</h3>
				<h3>Eye Color: {props.data.eye_color}</h3>
				<h3>Height: {props.data.height}</h3>
				<h3>Mass: {props.data.mass} units</h3>
				<h4>This character was {props.data.films.length} film(s)</h4>
			</Card>
		</Row>
	)

}

export default StarwarsCard; 