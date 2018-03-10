import React from 'react';
import './Navbar.css';
import {NavbarBrand,} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      
            <NavbarBrand className="test" href="/">
              <h1 className="test">React Wars</h1>
            </NavbarBrand>
        
    );
  }
}