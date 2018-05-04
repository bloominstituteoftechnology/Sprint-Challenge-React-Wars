import React from 'react';
import PropTypes from "prop-types";


import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import starwars_data from '../../assets/starwars_data.png';
import InstaCam from '../../assets/instacam.png';
import './SearchBar.css';




class SearchBar extends Component {
    render() {
        return (
            <Navbar className="nav-wrapper">
                <NavbarBrand>
                    <div className="logo-layout">
                        <div className="insta-cam-logo-wrapper">
                            <img className="logo" src={InstaCam} />
                        </div>
                        <div className="insta-logo-wrapper">
                            <img className="logo" src={InstaImage} />
                        </div>

                    </div>
                </NavbarBrand>
                <Nav>

                    <input clsssName="fancy-search" type="text" />
                </Nav>
                <Nav>
                    <NavItem>

                        <NavLink href="/">icon</NavLink>

                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
export default SearchBar;