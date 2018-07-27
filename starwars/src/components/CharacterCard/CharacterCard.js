import React, {Component} from 'react';
import './CharacterCard.css';


class CharacterCard extends Component {
    
    render() { 

        let classes = "character-card";
        if (this.props.selected) {
            classes = "selected";
        }

        return (
            <div className={classes}>
                <div className="profile-pic">{this.props.profilePicture}</div>
                <div className="name">{this.props.name}</div>
                <div className="birthday">{this.props.birthday}</div>
                <div className="eye-color">{this.props.eyeColor}</div>
                <div className="gender">{this.props.gender}</div>
                <div className="height">{this.props.height}</div>
                <div className="mass">{this.props.mass}</div>
                <div className="hair-color">{this.props.hairColor}</div>
                <div className="skin-color">{this.props.skinColor}</div>
                
            </div>
          );
    }
}
 
export default CharacterCard;