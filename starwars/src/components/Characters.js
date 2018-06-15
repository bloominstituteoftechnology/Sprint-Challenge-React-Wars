import React from 'react';

const Characters = props => {
    // let { starwarsChars, getCharacters } = this.props;

    return (
<div className="chars"> onClick={ () => props.showCharacter(props.starwarsChars.name)}>
    {this.state.starwarsChars.name} 
</div>
    );
};

export default Characters;