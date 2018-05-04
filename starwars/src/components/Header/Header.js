import React, { Component } from 'react';
import explore from '../../img/explore.png';
import heart from '../../img/heart.png';
import man from '../../img/man.png';
import './Header.css';
import { Navbar, NavbarBrand, Nav, NavItem, Input} from "reactstrap";

class Header extends Component {
  render() {
    return (
        <Navbar className="nav-container">
            <NavbarBrand>
                <div>
                    <img className="nav-logo-img" src={"https://upload.wikimedia.org/wikipedia/commons/7/7b/May_the_4th_be_with_you_%28Star_Wars_Day%29.gif"} alt=''/>
                    <img className="nav-logo-name" src={"http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG16.png"} alt=''/>
                </div>
            </NavbarBrand>
            <Nav>
                <Input placeholder="search" />
            </Nav>
            <Nav>
                <NavItem>
                    <img src={explore} alt=''/>
                </NavItem>
                <NavItem className="nav-img">
                    <img src={heart} alt=''/>
                </NavItem>
                <NavItem>
                    <img src={man} alt=''/>
                </NavItem>
            </Nav>
        </Navbar>  
    );
  }
}

export default Header;
