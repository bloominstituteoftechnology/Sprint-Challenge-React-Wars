import React from 'react'
import Card from './card/card'
import '../StarWars.css'

export default (props) => {
   return (
      <div className='cardsContainer'>
      {props.cardList.map((card) => <Card char={card}/> )}
      </div>
   )
}
