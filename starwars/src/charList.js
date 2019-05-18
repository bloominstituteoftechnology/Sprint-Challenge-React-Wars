import React from 'react'
import Character from './character'
import App from './App'

const CharList = props => {

    return (
        <div>
         <h2>Character List</h2>
         {props.chars.map (char => {
             return <Character key = {char.created} stuff ={char} name ={props.chars.name}/>
         })}

        </div>
    )
}

export default CharList;