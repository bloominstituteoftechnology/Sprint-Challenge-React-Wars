import React from 'react';
import Button from '../elements/Button'

const Pagination = (props) => {
	return (
		<div>
			{
				props.page == 1 
				? <Button onClick={props.nextHandler}>Next</Button> 
				:<div>
					<Button onClick={props.prevHandler}>Previous</Button> 
					<Button onClick={props.nextHandler}>Next</Button>
				</div>
				
			}
		</div>
	);
};

export default Pagination;