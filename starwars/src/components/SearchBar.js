import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchBar = ({ setPage }) => {
	const [searchParams, setSearchParams] = useState('');
	const [searchMethod, setSearchMethod] = useState('?name=');

	// Function which takes entered search parameters and method to search by and uses setPage to request new data
	function searchSubmit(e) {
		setPage(
			`https://rickandmortyapi.com/api/character/${searchMethod}${searchParams}`
		);
		setSearchParams('');
	}

	//Renders the SearchBar
	return (
		<Form
			inline
			onSubmit={(e) => {
				e.preventDefault();
				searchSubmit();
			}}
		>
			<FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
				<Label for='search-text' className='mr-sm-3' style={{ color: 'white' }}>
					Search
				</Label>
				<Input
					type='text'
					name='text'
					value={searchParams}
					onChange={(e) => {
						setSearchParams(e.target.value);
					}}
					id='search-text'
					placeholder='Enter parameters'
					className='mr-sm-3'
				/>
			</FormGroup>
			<FormGroup check>
				<Label check style={{ color: 'white' }} className='mr-sm-3'>
					<Input
						defaultChecked
						type='radio'
						name='radio2'
						value={'?name='}
						onChange={(e) => setSearchMethod(e.target.value)}
					/>
					By Name
				</Label>
			</FormGroup>
			<FormGroup check>
				<Label check style={{ color: 'white' }} className='mr-sm-3'>
					<Input
						type='radio'
						name='radio2'
						value={'?gender='}
						onChange={(e) => setSearchMethod(e.target.value)}
					/>{' '}
					By Gender
				</Label>
			</FormGroup>
			<Button>Submit</Button>
		</Form>
	);
};

export default SearchBar;
