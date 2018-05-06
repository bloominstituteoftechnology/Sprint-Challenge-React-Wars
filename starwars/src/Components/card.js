import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (

            <div className="card">
                {this.props.hereIAm.name}
                </div>
        )
    }
}

export default Card;