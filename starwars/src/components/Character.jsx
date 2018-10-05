/* <Character /> is a component to grab characters data and display it on the screen. */

import React from 'react';

class Character extends React.Component {

    render () {
        return (
            <div className="character">
                <h2>{this.props.name}</h2>
                <p>Birth Year: <span>{this.props.birth_year}</span></p>
                <p>Gender: <span>{this.props.gender}</span></p>
                <p>Height: <span>{this.props.height}</span></p>
                <p>Mass: <span>{this.props.mass}</span></p>
                <p>Hair Color: <span>{this.props.hair_color}</span></p>
                <p>Skin Color: <span>{this.props.skin_color}</span></p>
                <p>Eye Color: <span>{this.props.eye_color}</span></p>
                <p># of Film Appearances: <span>{this.props.films.length}</span></p>
            </div>
        )
    }
}
export default Character;
