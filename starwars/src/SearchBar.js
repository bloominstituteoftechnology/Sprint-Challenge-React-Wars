import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super();
        this.state = {

            searchInput: ''
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search input: ', this.state.searchInput);
        this.setState({ searchInput: '' });
    }

    handleSearchInput = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a >React Wars</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Form pullLeft>
                    <input type="text" placeholder="Search" value={this.state.searchInput} onChange={this.handleSearchInput} />
                    <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Navbar.Form>
            </Navbar>
        )
    }
}

export default SearchBar;