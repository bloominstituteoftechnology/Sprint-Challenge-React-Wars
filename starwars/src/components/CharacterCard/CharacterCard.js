import React from 'react';


class CharacterCard extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            details: {}
        }
    }

    componentDidMount() {
        this.setState ({
            details: this.props.character
        })
    }

    render() {
        return (
            <div classname="CardContainer">
                <h2>{this.state.details.name}</h2>
            </div>
        );
    }
}