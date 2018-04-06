import React from 'react';
import './Character.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Character extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1'
		};
	}

	// toggle functionality
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

	// receives star wars api data from Apps
	// console.log(props.chars);
	render() {
		return (
			<div className="cardContainer">
				{props.chars.map((char, index) => 
					<Card>
						<CardBody>
							<h2>{char.name}</h2>
							<CardTitle>Quick Facts</CardTitle>
							<ListGroup>
								<ListGroupItem>Birth Year: {char.birth_year}</ListGroupItem>
								<ListGroupItem>Created: {char.created}</ListGroupItem>
								<ListGroupItem>Edited: {char.edited}</ListGroupItem>


							</ListGroup>
						</CardBody>
					</Card>
				)}
			</div>
		);
	}
}

export default Character;