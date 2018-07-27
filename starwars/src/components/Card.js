import React from 'react';
import './StarWars.css';

class Card extends React.Component {
    constructor(){
        super();
    }




    render() {

        return (

            // <div onClick = {this.props.checkState}>Checking out Placement</div>
            <div className="characters">
                <div className="character">
                    <h1>{this.props.name}</h1>

                </div>
            
            </div>
        );
    }
}

export default Card; 