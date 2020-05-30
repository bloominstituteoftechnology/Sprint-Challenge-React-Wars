import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from '../images/RickNMorty.png';
import PaginationBar from './PaginationBar';

const Header = ({ data, page, setPage }) => {
	return (
		<Navbar color='dark' sticky={'top'}>
			<NavbarBrand>
				<img src={logo} style={{ height: '50px' }} />
			</NavbarBrand>
			<PaginationBar
				next={data.info.next}
				prev={data.info.prev}
				page={page}
				setPage={setPage}
			/>
		</Navbar>
	);
};

export default Header;
