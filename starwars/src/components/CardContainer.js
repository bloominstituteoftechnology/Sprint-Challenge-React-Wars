import React from 'react';
import Card from './Card';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.state[0])
    const cards = this.props.state.map(character => <Card state={character}/>)
    return(
      <div className='card-container'>
        <h2>DataBase ID Card</h2>
        {cards}
      </div>
    );
  }
}

export default CardContainer;
