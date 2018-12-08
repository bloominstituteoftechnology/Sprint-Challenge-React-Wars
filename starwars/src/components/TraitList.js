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

    const capFirstCharacter = text=>{
        return text.charAt(0).toUpperCase() + text.substring(1)
    }

    return(
        <ul>{traits.map((trait,i)=>{
            /*capitalize the first character and replace underscores with spaces */
            return <li key={i}>{capFirstCharacter(trait[0]).replace('_',' ')} : {trait[1]}</li>
        })}</ul>
    )
    
}

export default TraitList;