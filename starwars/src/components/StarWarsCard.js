import React from 'react';
import Character from './Character';

class StarWarsCard extends React.Component {
  render() {
    return (
      <div className="charCard">
        {this.props.data.starwarsChars.map(x => {
          //   return <div>{x.name}</div>;
          return <Character name={x.name} gender={x.gender} />;
        })}
      </div>
    );
  }
}

export default StarWarsCard;
