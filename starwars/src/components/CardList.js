import React from 'react';
import Character from './Character';

class CardList extends React.Component {
  render() {
    return (
      <div className="characterCard">
        {this.props.data.starwarsChars.map(e => <Character 
          name={e.name} 
          gender={e.gender} 
          birthYear={e.birth_year}
          height={e.height}
          mass={e.mass}
        />)}
      </div>
    );
  }
}

export default CardList;