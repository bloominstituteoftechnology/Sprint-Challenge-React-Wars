import React from 'react'
import Char from './char';




const CharPage = props => {

    return (
        <div className='char-page'>

        <Char charProp={props.charInfo.name} charMass={props.charInfo.mass}
         />

        {/* <Biggs biggsProp={props.charInfo.name} />

        <C3p0 c3p0Prop={props.charInfo.name}/>

        <DarthVader vaderProp={props.charInfo.name} />

        <Leia leiaProp={props.charInfo.name}/>

        <Luke lukeProp={props.charInfo.name}/>

        <ObiWan obiProp={props.charInfo.name}/>

        <OwenLars owenProp={props.charInfo.name}/>

        <R2d2 r2d2Prop={props.charInfo.name}/>

        <R5d4 r5d4Prop={props.charInfo.name}/> */}

        </div>
    )
}

export default CharPage