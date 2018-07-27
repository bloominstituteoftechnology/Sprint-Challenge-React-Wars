import React, {Component} from 'react';
import './character.css';

class Character extends Component {

    handleClick = () => {
        this.props.selectCharacter(this.props.character);
    }

    render () {
        
        const characterName = this.props.character.name;

        const style = {
            backgroundImage: `url('')`,
        };

        return (
            <div className="character" onClick={this.handleClick}>
                <div className="character-name">
                    {characterName}
                </div>
                <div className="character-image" style={style}></div>
            </div>
        )

    }
}
    export default Character;