import React from 'react'

class Card extends React.Component {

    render() {
        return (
            <div className="cta">
                <p>
                    Name: {this.props.starWarsInfo.name}<br />
                    Height: {this.props.starWarsInfo.height}cm<br />
                    Birth Year: {this.props.starWarsInfo.birth_year}<br />
                    Eye Color: {this.props.starWarsInfo.eye_color}<br />
                    Gender: {this.props.starWarsInfo.gender}<br />
                    Hair Color: {this.props.starWarsInfo.hair_color}<br />
                    Mass: {this.props.starWarsInfo.mass}kg<br />
                    Skin Color: {this.props.starWarsInfo.skin_color}<br />
                </p>
            </div>
        );
    }
}

export default Card