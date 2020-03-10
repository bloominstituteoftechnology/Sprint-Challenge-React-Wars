import React, {useState} from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Character = (props) => {
	const [popoverOpen, setPopoverOpen] = useState(false);

	const toggle = () => setPopoverOpen(!popoverOpen);
	return (
		// <div className="card">
		// 	<h1>{props.character.name}</h1>
		// 	<p>Height: {props.character.height}cm</p>
		// 	<p>Eye Color: {props.character.eye_color}</p>
		// 	<p>Skin Color: {props.character.skin_color}</p>
		// </div>
		<div>
			<Button id="Popover1" type="button">
			{props.character.name}
			</Button>
			<Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
				<PopoverHeader>{props.character.name}</PopoverHeader>
				<PopoverBody>Skin Color: {props.character.skin_color}</PopoverBody>
			</Popover>
		</div>
	);
};

export default Character;
