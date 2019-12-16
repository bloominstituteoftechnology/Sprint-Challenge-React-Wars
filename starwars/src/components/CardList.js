import React from 'react';

import Card from './Card'

const CardList = (props) => {
    // console.log("CardList:", props.char)
    return (
        <div className="characters">
          {props.swData.map((char, index) => {
            return <Card key={index} char={char} />
          })}
        </div>
    )
}
export default CardList;