import React, { Component } from 'react';
import CharBios from './CharBios'; 

class CharList extends Component {
  render() {
    const starwarsChars = this.props.starwarsChars; 

    return (
      <div className="">
        {
        starwarsChars.map((tests) => {
          console.log(tests)
            return (
              <div key={tests.url}>
                <h1 className="char-name">{tests.name}</h1> 
                <CharBios CharBios={tests} /> 
              </div>
            )
          })
        }
      </div>
      );
  }
}

export default CharList; 