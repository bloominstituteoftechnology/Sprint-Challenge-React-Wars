import React from 'react'
import './App.css';
import ListItem from './ListItem'


const ListChars = props => {
	return (
		<div>
			<ul className="ul">
				<ListItem />
			</ul>
		</div>
	);
};

export default ListChars;