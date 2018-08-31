import React from 'react';

const PreviousButton = props => {
    return (
        <button onClick={props.onClick ? props.onClick:null} onClick={this.Previous}>Previous</button>
    );
}

export default PreviousButton;