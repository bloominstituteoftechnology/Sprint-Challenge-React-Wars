import React from 'react';
import Card from './Card';
import './CardList.css'
const CardList = (props) => {
    

    let data = props.data;
    return(
        <div className="CardList"> 
            {data.map((c,i) => <Card 
                key={i}
                name={c.name}
                height={c.height}
                mass={c.mass}
                hair_color={c.hair_color}
                skin_color={c.skin_color}
                gender={c.gender} 
                
            />)}
        </div>
        
    )
}

export default CardList;