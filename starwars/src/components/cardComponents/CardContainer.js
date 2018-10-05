import React from 'react';
import './card.css';
import CardName from './CardName';
import CharPicture from './CharPicture';
import CharInfo from './CharInfo';


const CardContainer = (props) => {
    return(
        <div>
            <div>
                {props.names.map(name => {
                    return <div className={'cardContainerItems'}><div className={'cardNameTitle'}><h1><CardName title={name}/></h1><CharPicture />  </div></div>
                })}
                {props.births.map(birth => {
                    return <div className={'birthDiv'}><div className={'birthText'}><p><CharInfo charBirth={birth}></CharInfo></p></div></div>
                })}
            </div>
            <div>
                
            </div>
        </div>
      );

}


export default CardContainer
