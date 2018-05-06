import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (

            <div className="card">
            <div className='wrapper'>    
            <div className='cardRow'>    
                    {this.props.hereIAm.name}
                </div>
                <div className='cardRow'>
                    {this.props.hereIAm.birth_year}
                </div>
                <div className='cardRow'>
                    {this.props.hereIAm.eye_color}
                </div>
                <div className='cardRow'>
                    {this.props.hereIAm.gender}
                </div>
                <div className='cardRow'>
                    {this.props.hereIAm.height}
                    </div>
                </div>
                </div>
        )
    }
}

export default Card;