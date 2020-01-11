import React, { useState } from "react";
import { Card, CardColumns, CardTitle, CardSubtitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const PersonCard = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    return (

        <CardColumns className="card-columns">
            <Card style={{ backgroundColor: '#ffffff00', borderColor: '#333' }} className="person-card">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        <CardTitle className="name">{props.name}</CardTitle>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <CardSubtitle className="height">
                                <p>Height: {props.height}</p>
                            </CardSubtitle>
                        </DropdownItem>
                        <DropdownItem>
                            <CardSubtitle className="mass">
                                <p>Mass: {props.mass}</p>
                            </CardSubtitle>
                        </DropdownItem>
                        <DropdownItem>
                            <CardSubtitle className="birth_year">
                                <p>Birth Year: {props.birth_year}</p>
                            </CardSubtitle>
                        </DropdownItem>
                    </DropdownMenu>
                    
                </Dropdown>
            </Card>
        </CardColumns>
    )

};

export default PersonCard;


    