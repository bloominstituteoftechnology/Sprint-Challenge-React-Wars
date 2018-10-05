import React from 'react';
import './StarWars.css';
import CharNames from './CharNames';
import CharInfo from './CharInfo';
import CharPicture from './CharPicture'

const CardContainer = props => {
    return(
        <div className={'charContainers'}>
            {props.names.map(name => {
                return(
                <div className={'cardContainerNames'}>
                <h1><CharNames charnames={name} /></h1>
                <div className={'charPictureContainer'}><CharPicture /></div>
                <div className={'cardcontainerBirth'}><p><CharInfo charinfo={name}/></p></div>
                </div>
                
                )
            })}





            {/* {props.charinfobirthyear.map(birth => {
                return <div className={'cardcontainerBirth'}><p><CharInfo charinfobirth={birth}/></p></div>
            })} */}
        </div>
    )
}

export default CardContainer