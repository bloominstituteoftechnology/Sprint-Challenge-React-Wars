import React from 'react';
import './StarWars.css';

class CharacterData extends React.Component {
    render() {
        return (
                <div className='data-container'><p>{this.props.text1}: {this.props.dataItem1}</p><p>{this.props.text2}: {this.props.dataItem2}</p></div>
        )
    }    
}

export default CharacterData;