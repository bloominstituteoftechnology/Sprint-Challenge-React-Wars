import React, { Component } from 'react';
import './StarWars.css';
import CardCharInfo from './CardCharInfo';
import CardImgs from './CardImgs';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardImgs: [
        {
          name: 'luke',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/luke-sky.jpg'
        },
      ]
    }
  }

  render() {
    return (
      <div className="card-container">
        <h2>{this.props.name}</h2>
        <div className="char-info__img-container">
        {this.state.cardImgs.map(item => <CardImgs 
          key={1977 + Math.random()}
          url={`${item.url}`}
        />)}
        </div>

        <div className="char-info__title-container">
          <h3>Character Info:</h3>
          <p className="char-info__item home">
            <span>Home World:</span>
            <a href={this.props.homeworld} target="_blank">{` Visit ${this.props.name}'s Home World`}</a>
          </p>
        </div>

        <CardCharInfo 
          name={this.props.name}
          birthYear={this.props.birthYear}
          gender={this.props.gender}
          skinColor={this.props.skinColor}
          hairColor={this.props.hairColor}
          eyeColor={this.props.eyeColor}
          height={this.props.height}
          mass={this.props.mass}
        />


      </div>

    );
  }
}






/*
const Card = props => {
  imgObj = [
    {
      url: './img/luke-sky.jpg'
    }
  ]
  return (
    <div className="card-container">
      <h2>{props.name}</h2>

      <div className="char-info__img-container">
        <img src="" alt=""/>
      </div>

      <div className="char-info__title-container">
        <h3>Character Info:</h3>
        <p className="char-info__item home">
          <span>Home World:</span>
          <a href={props.homeworld} target="_blank">{` Visit ${props.name}'s Home World`}</a>
        </p>
      </div>

      <CardCharInfo 
        name={props.name}
        birthYear={props.birthYear}
        gender={props.gender}
        skinColor={props.skinColor}
        hairColor={props.hairColor}
        eyeColor={props.eyeColor}
        height={props.height}
        mass={props.mass}
      />


    </div>
  );
};
*/

export default Card;