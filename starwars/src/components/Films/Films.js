import React from 'react';
import './Films.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Films
        </DropdownToggle>
                <DropdownMenu>
                    {this.props.data.map(i => {
                        return (
                            <DropdownItem key={i.films}>{i.films}</DropdownItem>
                        );
                    })}
                </DropdownMenu>
            </Dropdown>
        );
    }
}