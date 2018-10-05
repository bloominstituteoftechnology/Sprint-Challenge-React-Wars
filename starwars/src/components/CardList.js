import React from 'react';
import Card from './Card'
import './StarWars.css'
import ScrollArea from 'react-scrollbar'

const CardList = ({starwarsChars,stylecardlist,stylecard}) => {
    
    return (
        <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            >
            {starwarsChars.map( (starwarsItem) => {
                console.log(starwarsItem)
                return (
                    
                    <Card 
                    key ={starwarsItem.created} 
                    id = {starwarsItem.created}
                    name ={starwarsItem.name}
                    gender ={starwarsItem.gender}
                    height ={starwarsItem.height}
                    mass ={starwarsItem.mass}
                    displaystylecard ={stylecard} 
                    />
                )
            })}
        
        </ScrollArea>
        
    )
        
        
    
}

export default CardList