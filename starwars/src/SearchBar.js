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
        // Added Feature: Need to find a way to take the input and check it against the 'name' property value on each of 
        // the objects so that if you want to search through the list to find a specific character, then you can just type
        // in the name.
        console.log('Search input: ', this.props.charList);
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