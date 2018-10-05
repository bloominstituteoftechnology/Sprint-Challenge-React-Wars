import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <li>Name: {this.props.info.name}</li>
                <li>Height: {this.props.info.height}</li>
                <li>Mass: {this.props.info.mass}</li>
                <li>Hair Color: {this.props.info.hair_color}</li>
                <li>Skin Color: {this.props.info.skin_color}</li>
                <li>Eye Color: {this.props.info.eye_color}</li>
                <li>Birth Year: {this.props.info.birth_year}</li>
                <li>Gender: {this.props.info.gender}</li>  
            </div>
        );
    }
}

export default Card;