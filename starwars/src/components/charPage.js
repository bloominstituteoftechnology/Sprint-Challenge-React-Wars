import React from 'react'
import Beru from './beruWhitesunLars';
import Biggs from './biggsDarklighter';
import C3p0 from './c3p0';
import DarthVader from './darthVader';
import Leia from './leia';
import Luke from './luke';
import ObiWan from './obiWan';
import OwenLars from './owenLars';
import R2d2 from './r2d2';
import R5d4 from './r5d4';



const CharPage = props => {

    return (
        <div className='char-page'>

        <Beru beruProp={props.charInfo.name[1]} />

        <Biggs biggsProp={props.charInfo} />

        <C3p0 c3p0Prop={props.charInfo}/>

        <DarthVader vaderProp={props.charInfo} />

        <Leia leiaProp={props.charInfo}/>

        <Luke lukeProp={props.charInfo}/>

        <ObiWan obiProp={props.charInfo}/>

        <OwenLars owenProp={props.charInfo}/>

        <R2d2 r2d2Prop={props.charInfo}/>

        <R5d4 r5d4Prop={props.charInfo}/>

        </div>
    )
}

export default CharPage