import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import LoadingPage from './components/LoadingPage';
import Header from './components/Header';
import CardContainer from './components/CardContainer';

function App() {
	//Store 1) Returned Data and 2) address for request
	const [data, setData] = useState('');
	const [page, setPage] = useState(
		'https://rickandmortyapi.com/api/character/'
	);

	//Make API Call and set Data to response
	useEffect(() => {
		axios.get(page).then((res) => {
			setData(res.data);
		});
	}, [page]);

	//Render
	return (
		<React.Fragment>
			{!data && <LoadingPage />}
			{data && (
				<React.Fragment>
					<Header data={data} setPage={setPage} />
					<Container fluid>
						<Row className='mt-3'>
							<Col>
								<CardContainer data={data} />
							</Col>
						</Row>
					</Container>
				</React.Fragment>
			)}
		</React.Fragment>
	);
}

export default App;
