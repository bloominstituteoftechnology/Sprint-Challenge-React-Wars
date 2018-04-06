import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class CharSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
            {this.props.swChars.map((char, index) => (
                <div key={char.created + index}>     
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === `${index}` })}
                    onClick={() => { this.toggle(`${index}`); }}
                    >
                        {char.name}
                    </NavLink>
                </NavItem>
                </div>
            ))}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>

            {this.props.swChars.map((char, index) => (
                <div className="tab-pane">
                <TabPane tabId={index}>                        
                    <Row>
                        <Col sm="12">
                            <h4>Hello from {char.name} </h4>
                            <img src={char.homeworld} />
                        </Col>
                    </Row>
                </TabPane>
                </div>
            ))}

          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }

//   render() {
//     return (
//       <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//         <DropdownToggle caret>
//           Pick Character
//         </DropdownToggle>
//         <DropdownMenu>
//             <DropdownItem header> Character List</DropdownItem>
//                 {this.props.swChars.map((char, index) => (
//                     <div key={char.created + index}>
//                         <DropdownItem divider />
//                         <DropdownItem>{char.name}</DropdownItem>
//                     </div>
//                 ))}
          
//         </DropdownMenu>
//       </Dropdown>
//     );
//   }
}

export default CharSelector;