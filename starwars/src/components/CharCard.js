import React from 'react';

class CharCard extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    open: 'false'
    };
  }

  toggleOpen = (e) => {
    this.setState(prevState => ({
        open: !prevState.open
    }))
} 
    render(){
        return (
            <div className="char-card">
               <div className="toggle-title" onClick={this.toggleOpen}>
               <h3>{this.props.name}</h3>
               </div>
               <div className={this.state.open === true ? "info-inner open" : "info-inner"}>
               <h6>Height:{this.props.height}</h6>
               <h6>Mass: {this.props.mass}</h6>
               <h6>Hair Color: {this.props.hairColor}</h6>
               <h6>Skin Color: {this.props.skinColor}</h6>
               <h6>Eye Color: {this.props.eyeColor}</h6>
               <h6>Birth Year: {this.props.birthYear}</h6>
               <h6>Gender: {this.props.gender}</h6>
            </div>
           </div>
           );
    }
    
};

export default CharCard;