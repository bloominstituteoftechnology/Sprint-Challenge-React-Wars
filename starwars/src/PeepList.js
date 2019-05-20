import React from 'react';
import Peep from './Peep';

const PeepList = props => {
	console.log(props.charsProp)
	return (
		<div>
			{props.charsProp.map(item => (
				<Peep 
				name={item.name}
				key={item.name}
				hair_color={item.hair_color}
				gender={item.gender}
				height={item.height}
				skin_color={item.skin_color}
				species={item.species}
				birth_year={item.birth_year}
				/>
			))}
		</div>
	);
}

export default PeepList; 