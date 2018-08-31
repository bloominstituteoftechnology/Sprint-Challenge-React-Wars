import React from "react";
import Item from "./Item";

function ItemList(props){
	return (

		<div>{props.items.map(item => <Item 
			name={item.name}
			birth={item.birth_year}
			created={item.created}
			edited={item.edited}
			eye_color={item.eye_color}
			gender={item.gener}
			hair_color={item.hair_color}
			height={item.height}
			homeworld={item.homeworld}
			mass={item.mass}
			skin_color={item.skin_color}
			url={item.url}
			films={item.films}
			species={item.species}
			starships={item.starships}
			vehicles={item.vehicles}
		/>)}</div>
	)
}

export default ItemList;
