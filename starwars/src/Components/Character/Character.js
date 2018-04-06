import React from 'react';
import './Character.css';

class Character extends React.Component {
    render() {
    return (
        <div className='container'>
           <h1>{this.props.info.name}</h1>
           <p>{this.props.info.mass}</p>
           <p>{this.props.info.height}</p>
        </div>
    )};
}


export default Character;