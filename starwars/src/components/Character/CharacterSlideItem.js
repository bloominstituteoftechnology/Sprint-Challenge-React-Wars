import React, { Component } from 'react';

export default class CharacterSlideItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: []
        }
    }

    componentDidMount() {
        this.setState({ character: this.props.character });
    }

    render() {
        return (<div className={this.state.character.gender === 'male' ? 'CharacterCard CharacterCard--male' : this.state.character.gender !== 'female' ? 'CharacterCard CharacterCard--other' :'CharacterCard CharacterCard--female'}>
            <div className="CharacterCard__TopBanner">
                <div className="CharacterCard__Title"> {this.state.character.name}</div>
                <div className="CharacterCard__BirthYear">{this.state.character.birth_year}</div>                
            </div>
            <div className="CharacterCard__StatsSection">
                    <div className="StatsSection">
                        <div className="StatsSection_Row">
                            <div>Height</div>
                            <div>{this.state.character.height}</div>
                        </div>
                        <div className="StatsSection_Row">
                            <div>Mass</div>
                            <div>{this.state.character.mass}</div>
                        </div>
                        <div className="StatsSection_Row">
                            <div>Eye Color</div>
                            <div>{this.state.character.eye_color}</div>
                        </div>
                        <div className="StatsSection_Row">
                            <div>Hair Color</div>
                            <div>{this.state.character.hair_color}</div>
                        </div>
                        <div className="StatsSection_Row">
                            <div>Skin Color</div>
                            <div>{this.state.character.skin_color}</div>
                        </div>
                    </div>
                    <div className="StatsSection__Footer">
                        <div>Created : {this.state.character.created}</div>
                        <div>Edited : {this.state.character.edited}</div>
                    </div>
            </div>
            </div>);
    }
}