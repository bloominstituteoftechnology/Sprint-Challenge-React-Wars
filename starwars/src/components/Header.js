import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from '../images/RickNMorty.png';
import PaginationBar from './PaginationBar';
import SearchBar from './SearchBar';

const Header = ({ data, page, setPage }) => {
	return (
		//Render Navbar
		<Navbar color='dark' sticky={'top'}>
			{/* Render NavBar Brand */}
			<NavbarBrand>
				<img
					src={logo}
					style={{ height: '50px' }}
					alt={`${data.results.name}`}
				/>
			</NavbarBrand>

			{/* Render SearchBar */}
			<SearchBar data={data} page={page} setPage={setPage} />

			{/* Render Pagination Buttons */}
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
