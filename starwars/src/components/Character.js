import React from 'react';
import './Character.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
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
				{this.props.chars.map((char, index) => 
					<Card>
						<CardBody>
							<h2>{char.name}</h2>

								<div>
						      <Nav tabs>
					          <NavItem>
					            <NavLink
					              className={classnames({ active: this.state.activeTab === '1' })}
					              onClick={() => { this.toggle('1'); }}
					            >
					              Tab1
					            </NavLink>
					          </NavItem>
					          <NavItem>
					            <NavLink
					              className={classnames({ active: this.state.activeTab === '2' })}
					              onClick={() => { this.toggle('2'); }}
					            >
					              Moar Tabs
					            </NavLink>
					          </NavItem>
					        </Nav>
					      </div>

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