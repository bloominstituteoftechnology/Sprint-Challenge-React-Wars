+import React from 'react';
 +
 +const CharacterCard = ({props}) =>
   return(
    <div>
    <div> name: {starwarsChar.name} </div>
    <div> birth_year: {starwarsChar.birth_year} </div>
    <div> height: {starwarsChar.height} </div>
 +    this.state = {
 +      character: {}
 +    };
 +  }
 +
 +  componentDidMount() {
 +    fetch(this.props.race)
 +    .then(res => {
 +      return res.json();
 +    })
 +    .then(data => {
 +      this.setState({ race: data });
 +    })
 +    .catch(err => {
 +      throw new Error(err);
 +    });
 +  }
 +
 +export default CharacterCard; 
