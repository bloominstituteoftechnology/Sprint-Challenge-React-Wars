import React from 'react';
import './Films.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Films extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        const { films, films_lookup } = this.props;
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Films
                </DropdownToggle>
                <DropdownMenu>
                    {films.map(film => {
                        return (
                            <DropdownItem key={film}>{films_lookup[film]}</DropdownItem>
                        );
                    })}
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default Films;