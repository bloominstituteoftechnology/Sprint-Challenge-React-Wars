import React from 'react';

const StarwarsChars = props => {
    return <div>{props.chars.map(char => <Char char={char}/> )} </div> ;

}

export default StarwarsChars;