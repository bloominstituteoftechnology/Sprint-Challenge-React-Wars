import React from 'react';

import Card from './Card'

const CardList = (props) => {
    return (
        <div className="characters">
          {props.swData.map((char, index) => {
            return <Card key={index} char={char} />
          })}
        </div>
    )
}
export default CardList;