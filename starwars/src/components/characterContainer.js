import React from 'react';
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




const CharacterContainer = props => {

    return (

        <div className='character-cont'>

            {props.charData.results.map(e => (

                <Beru key = {e.name} beruProp={e} />

                <Biggs key = {e.name} biggsProp={e} />

                <C3p0 key = {e.name} c3p0Prop={e}/>

                <DarthVader = {e.name} vaderProp={e} />

                <Leia key = {e.name} leiaProp={e}/>

                <Luke key = {e.name} lukeProp={e}/>

                <ObiWan key = {e.name} obiProp={e}/>

                <OwenLars key = {e.name} owenProp={e}/>

                <R2d2 key = {e.name} r2d2Prop={e}/>

                <R5d4 key = {e.name} r5d4Prop={e}/>
            ))}



        </div>

    )
}


export default CharacterContainer;