import React from 'react';
import moment from 'moment';
import {
	Col,
	Card,
	CardImg,
	ListGroup,
	ListGroupItem,
	CardBody,
	CardHeader,
	CardFooter,
} from 'reactstrap';

const CharacterCard = ({ char }) => {
	return (
		<Col xs='6' sm='4' lg='3' className='mb-3'>
			<Card className='text-center'>
				<CardBody width='100%'>
					<CardHeader>{char.name}</CardHeader>
					<CardImg src={char.image} width='100%' />
					<ListGroup>
						<ListGroupItem>Species: {char.species}</ListGroupItem>
						<ListGroupItem>Gender: {char.gender}</ListGroupItem>
						<ListGroupItem>Status: {char.status}</ListGroupItem>
						<ListGroupItem>Location: {char.location.name}</ListGroupItem>
					</ListGroup>
					<CardFooter>
						Created {moment(char.created).format('MMMM Do YYYY')}
					</CardFooter>
				</CardBody>
			</Card>
		</Col>
	);
};

export default CharacterCard;
