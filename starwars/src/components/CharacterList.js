import React from 'react';
import './StarWars.css';
import CharacterItem from './CharacterItem';


class CharacterList extends React.Component {

  render() {
    return (
      <ul className="CharacterList">
        {this.props.charList.map((char, idx) => {
                return ( <CharacterItem key={char.created} charItem={char}
                          index={idx} controller={this.props.controller} /> );
        })}
      </ul>
    );
  }
}

export default CharacterList;
