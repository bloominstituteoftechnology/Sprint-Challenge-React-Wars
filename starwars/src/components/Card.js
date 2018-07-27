import React from 'react';
import './StarWars.css';

class Card extends React.Component {
    constructor(){
        super();
    }




    render() {

        return (

            <div onClick = {this.props.checkState}>Checking out Placement</div>
        );
    }
}

export default Card; 