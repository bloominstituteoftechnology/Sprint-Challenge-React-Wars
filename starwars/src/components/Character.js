import React from 'react';
import './StarWars.css';

class Character extends React.Component {  
    handleMouseOver = (event) => {
        const element = this.refs.charElement;
        element.classList.toggle('hidden');
      }

    render() {

        return (
            <div className={this.props.cssClasses.charClass} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOver}>
                <div>
                {this.props.name}
                <div className='hidden' ref='charElement'>
                    <p>Birth Year: {this.props.birthYear}</p>
                    <p>Eye Color: {this.props.eyeColor}</p>
                    <p>Gender: {this.props.gender}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <p>Height: {this.props.height}</p>
                    <p>Mass: {this.props.mass}</p>
                    <p>Skin Color: {this.props.skinColor}</p>
                    </div> 
                </div>

            </div>
        )
    }
};


export default Character;