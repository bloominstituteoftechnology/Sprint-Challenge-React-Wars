import React from 'react'
import Char from './char';




const CharPage = props => {

    return (
        <div className='char-page'>

        <Char charProp={props.charInfo.name} charMass={props.charInfo.mass}
        charYear={props.charInfo.birth_year}/>

     

        </div>
    )
}

export default CharPage