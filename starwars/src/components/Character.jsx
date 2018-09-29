/* <Character /> is a component to grab characters data and display it on the screen. */

import React from 'react';

class Character extends React.Component {

    render () {
        return (
            <div className="character">
                <h2>Name: {this.props.name}</h2>
                <p>Birth Year: {this.props.birth_year}</p>
                <p>Gender: {this.props.gender}</p>
                <p>Height: {this.props.height}</p>
                <p>Mass: {this.props.mass}</p>
                <p>Hair Color: {this.props.hair_color}</p>
                <p>Skin Color: {this.props.skin_color}</p>
                <p>Eye Color: {this.props.eye_color}</p>
                <p># of Apperances: {this.props.films.length}</p>
            </div>
        )
    }
}
export default Character;
