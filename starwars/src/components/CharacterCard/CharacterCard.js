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
                {this.props.text}
            </div>
          );
    }
}
 
export default CharacterCard;