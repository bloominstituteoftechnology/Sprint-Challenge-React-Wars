import React from 'react'
import Card from './card/card'

export default (props) => {
   return (
      <div>
      {props.cardList.map((card) => <Card char={card}/> )}
      </div>
   )
}
