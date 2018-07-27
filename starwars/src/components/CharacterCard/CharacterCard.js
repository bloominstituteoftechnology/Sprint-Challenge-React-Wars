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
                <div className="field name">{this.props.name}</div>
                <div className="field birthday">{this.props.birthday}</div>
                <div className="field eye-color">{this.props.eyeColor}</div>
                <div className="field gender">{this.props.gender}</div>
                <div className="field height">{this.props.height}</div>
                <div className="field mass">{this.props.mass}</div>
                <div className="field hair-color">{this.props.hairColor}</div>
                <div className="field skin-color">{this.props.skinColor}</div>
                
            </div>
          );
    }
}
 
export default CharacterCard;