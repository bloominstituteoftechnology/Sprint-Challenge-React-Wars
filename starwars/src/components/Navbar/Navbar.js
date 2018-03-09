import React from 'react';
import './Navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <div>
            <NavbarBrand className="swTitle" href="/">
              <span className="swTitleSpan">React Wars</span>
            </NavbarBrand>
          </div>
          <span className="navbarSearchBarSpan">
            <Input className="navbarSearchBar" placeholder="&#128269; Search" />
          </span>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Join the Rebellion</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Knowledge
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>The Force</DropdownItem>
                  <DropdownItem>The Dark Side</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Yoda Quotes</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
