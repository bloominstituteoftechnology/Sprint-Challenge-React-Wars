import React  from 'react'
import './StarWars.css'

const TraitList= props=>{

    // filter out the arrays and URLs
    const filterCharacteristics = obj=>{
        const entries = Object.entries(obj);
        return entries.filter(e=>{
            return typeof e[1] !== typeof [] && !e[1].includes('https')
        })
    }

    const traits = filterCharacteristics(props.character)


    return(
        <ul>{traits.map((trait,i)=>{
            return <li key={i}>{trait[0]} : {trait[1]}</li>
        })}</ul>
    )
    
}

export default TraitList;