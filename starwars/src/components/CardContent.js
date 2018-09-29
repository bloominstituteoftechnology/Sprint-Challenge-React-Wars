import React from 'react'
import './StarWars.css'

class CardContent extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    render() {
        return(
            <div className='card-info'>
                <div className='info-row'>
                    <h2 className='align-left'>Name:</h2>
                    <h2 className='align-right'>{this.props.details.name}</h2>
                </div>
                <div className='info-row'>
                    <h2 className='align-left'>Birth-year:</h2>
                    <h2 className='align-right'>{this.props.details.birth_year}</h2>
                </div>
                <div className='info-row'>
                    <h2 className='align-left'>Eye Color:</h2>
                    <h2 className='align-right'>{this.props.details.eye_color}</h2>
                </div>
                <div className='info-row'>
                    <h2 className='align-left'>Gender:</h2>
                    <h2 className='align-right'>{this.props.details.gender}</h2>
                </div>
                <div className='info-row'>
                    <h2 className='align-left'>Hair Color:</h2>
                    <h2 className='align-right'>{this.props.details.hair_color}</h2>
                </div>
                <div className='info-row'>
                    <h2 className='align-left'>Height:</h2>
                    <h2 className='align-right'>{this.props.details.height}</h2>
                </div>
                <div className='info-row'>
                    <h2 className='align-left'>Mass:</h2>
                    <h2 className='align-right'>{this.props.details.mass}</h2>
                </div>
                <div className='info-row'>
                    <h2 className='align-left'>Skin Color:</h2>
                    <h2 className='align-right'>{this.props.details.skin_color}</h2>
                </div>
            </div>
        )
    }
}

export default CardContent;