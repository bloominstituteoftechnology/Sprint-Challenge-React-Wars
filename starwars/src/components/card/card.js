import React from 'react';
import './card.css';

class Card extends React.Component {

  render() {



    const imageItem = (arr) => {
      let list = arr.map((el, i) => <li key={i}><img src={el} alt=''></img></li>);
      return list;
    }


    return (
      <div className='card'>

        <div className='bio'>
          <div>
            <img src={this.props.data.species} alt=''></img>
            <h2>{this.props.data.name}</h2>
          </div>

          <ul>
            <li>Gender: {this.props.data.gender}</li>
            <li>Height: {this.props.data.height}</li>
            <li>Hair Color: {this.props.data.hair_color}</li>
            <li>Eye Color: {this.props.data.eye_color}</li>
            <li>Skin Color: {this.props.data.skin_color}</li>
            <li>Birth Year: {this.props.data.birth_year}</li>
            <li>Mass: {this.props.data.mass}</li>
          </ul>
        </div>

        <div className='transportation'>
          <div>
            <h3>Vehicles</h3>
            <ul>
              {imageItem(this.props.data.vehicles)}
            </ul>

          </div>

          <div>
            <h3>Starships</h3>
            <ul>
              {imageItem(this.props.data.starships)}
            </ul>
          </div>
        </div>





        {console.log(this.props.data)}


      </div>
    )
  }
}

export default Card;
