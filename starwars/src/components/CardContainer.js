import React from 'react';
import Card from './Card';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return(
      <div className='card-container'>
        <h2>DataBase ID Card</h2>
        <Card />
      </div>
    );
  }
}

export default CardContainer;
