import React, { Component } from 'react';
import CharCard from './CharCard';

class CharCardContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() { 
    return ( 
      <div className="char-card-container">
        <CharCard headerName="Bio" appState={this.props.appState}/>
      </div>
     )
  }
}
 
export default CharCardContainer;