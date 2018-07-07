import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

export class CharCard extends React.Component {
  constructor(props) {
		super (props);
		this.state = { char: this.props };
	}
	
	render() {
		return (
			<div>
				{this.props}
			</div>
		)
	}
}