import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const PaginationBar = ({ next, prev, setPage }) => {
	return (
		<ButtonGroup className='mr-3'>
			{prev && (
				<Button
					onClick={() => {
						setPage(prev);
					}}
				>
					Previous Page
				</Button>
			)}
			{next && (
				<Button
					onClick={() => {
						setPage(next);
					}}
				>
					Next Page
				</Button>
			)}
		</ButtonGroup>
	);
};

export default PaginationBar;
