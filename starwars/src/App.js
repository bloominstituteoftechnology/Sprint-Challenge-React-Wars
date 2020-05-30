import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import LoadingPage from './components/LoadingPage';
import Header from './components/Header';
import CardContainer from './components/CardContainer';

function App() {
	const [data, setData] = useState('');
	const [page, setPage] = useState(
		'https://rickandmortyapi.com/api/character/'
	);

	useEffect(() => {
		axios.get(page).then((res) => {
			setData(res.data);
		});
	}, [page]);

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
