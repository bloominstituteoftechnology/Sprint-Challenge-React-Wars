import React from 'react'
import './cardContainer.css'
import Card from './Card'

const CardContainer = props => {
    return (
        <div className="cardContainer">
        
        
        <div>{props.swData.map((item, index) => {
            return (

                <Card 
                key={index}
                swItem={item}
                
                />
            )
            
        })}
       
       </div>
        </div>
    )
}
 

export default CardContainer;


