import React from 'react';
import './StarWars.css';

class Character extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
};

export default Character;