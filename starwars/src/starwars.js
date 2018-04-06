import React, { Component } from 'react';
import './starwars.css';

class StarWars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Characters: this.props.chars
        };
    };

    componentDidMount() {
        this.setState({ Characters: this.props.chars });
    }

    render() {
        console.log(this.props.chars);
        return(
            <div>
                {this.props.chars.map((aCharacter, index) => (
                    <div key={index} className="Character">
                        <section className="AboutMe">
                            <h4>About Me</h4>
                            <div className="AboutMeInfo">
                                <div><b>Name:</b> {aCharacter.name}</div>
                                <div><b>Birth Year:</b> {aCharacter.birth_year}</div>
                                <div><b>Height:</b> {aCharacter.height} cm</div>
                                <div><b>Mass:</b> {aCharacter.mass} kg</div>
                                <div><b>Gender:</b> {aCharacter.gender}</div>
                                <div><b>Hair Color:</b> {aCharacter.hair_color}</div>
                                <div><b>Eye Color:</b> {aCharacter.eye_color}</div>
                                <div><b>Skin Color:</b> {aCharacter.skin_color}</div>
                            </div>
                        </section>
                        <section className="BTS">
                            <h4>BTS</h4>
                            <div className="BTSInfo">
                                <div><b>Created:</b> {aCharacter.created}</div>
                                <div><b>Edited:</b> {aCharacter.edited}</div>
                                <div><b># of Films:</b> {aCharacter.films.length}</div>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
        );
    }
}

export default StarWars;