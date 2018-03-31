import React from 'react';
import SWCard from './swcard';
import './style.css';



const CardList = (props) => {
    return (
        <div className ="cardlist">
       { props.cards.map((item) => {
            return <SWCard card = {item}/>
        })
    }
       </div>
    )}

export default CardList; 