import React from "react";
import Item from "./Item";

function ItemList(props){
	return (
		<div>{props.items.map(item => <Item key={item.name} item={item}/>)}</div>
	)
}

export default ItemList;
