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
				              Quick Facts
				            </NavLink>
				          </NavItem>
				          <NavItem>
				            <NavLink
				              className={classnames({ active: this.state.activeTab === '2' })}
				              onClick={() => { this.toggle('2'); }}
				            >
				              Physical
				            </NavLink>
				          </NavItem>
				        </Nav>
				      </div>

				      <TabContent activeTab={this.state.activeTab}>
				      	<TabPane tabId="1">
									<ListGroup>
										<ListGroupItem>Birth Year: {char.birth_year}</ListGroupItem>
										<ListGroupItem>Created: {char.created}</ListGroupItem>
										<ListGroupItem>Edited: {char.edited}</ListGroupItem>
									</ListGroup>
								</TabPane>
					
				      	<TabPane tabId="2">
									<ListGroup>
										<ListGroupItem>Eye Color: {char.eye_color}</ListGroupItem>
										<ListGroupItem>Gender: {char.gender}</ListGroupItem>
										<ListGroupItem>Hair-Color: {char.hair_color}</ListGroupItem>
										<ListGroupItem>Mass: {char.mass}</ListGroupItem>
										<ListGroupItem>Skin-Color: {char.skin_color}</ListGroupItem>
									</ListGroup>
								</TabPane>
							</TabContent>	

						</CardBody>
					</Card>
				)}
			</div>

		);
	}
}

export default Character;