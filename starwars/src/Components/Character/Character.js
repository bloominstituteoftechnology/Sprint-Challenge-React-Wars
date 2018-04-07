import React from 'react';
import './Character.css';

class Character extends React.Component {
    render() {
    return (
        <div className='container'>
           <h1>{this.props.info.name}</h1>
           <p className='mass'>{this.props.info.name}'s mass is: {this.props.info.mass}</p>
           <p className='height'>{this.props.info.name}'s height is: {this.props.info.height}</p>
        </div>
    )};
}


export default Character;