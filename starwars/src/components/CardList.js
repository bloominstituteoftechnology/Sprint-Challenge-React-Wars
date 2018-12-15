import React from 'react';
import Character from './Character';

class CardList extends React.Component {
  render() {
    return (
      <div className="characterCard">
        {this.props.data.starwarsChars.map(e => <Character name={e.name} gender={e.gender} />)}
      </div>
    );
  }
}

export default CardList;