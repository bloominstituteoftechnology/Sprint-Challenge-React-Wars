import React from 'react';

const Pagination = props => {
	return (
		<div>
			{props.previous === null ? null : 
				(<button onClick={props.getPrevious}>Previous</button>)}
				
			{props.next === null ? null : 
				(<button onClick={props.getNext}>Next</button>)}
				
		</div>
		);
};

export default Pagination;