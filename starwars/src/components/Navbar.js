import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = props => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="nav-bar-container">
            <Navbar className="nav-bar" color="dark" dark>
                <img className="logo" href="https://www.starwars.com/" src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG28.png" alt="Star Wars franchise logo" />
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink href="https://swapi.co/">SWAPI API</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/kjmagill/Sprint-Challenge-React-Wars/tree/kj-magill">View My Code (GitHub)</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;