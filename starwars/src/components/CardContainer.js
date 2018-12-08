import React from 'react';
import Card from './Card';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.enlargeCard)
    const cards = this.props.char.map(character => <Card state={character} key={Math.random()} enlargeCard={this.props.enlargeCard}/>)
    return(
      <div className='card-container'>
        {cards}
      </div>
    );
  }
}

export default CardContainer;
