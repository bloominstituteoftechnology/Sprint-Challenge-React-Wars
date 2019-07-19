import React from 'react'
import Height from './Height'
import Mass from './Mass'
import HairColor from './HairColor'
import EyeColor from './EyeColor'
import SkinColor from './SkinColor'
import BirthYear from './BirthYear'
import Gender from './Gender'
import HomeWorld from './HomeWorld'

const ContentContainer = ({height, mass, hairColor, eyeColor, skinColor, birthYear, gender, homeWorld}) => {
    return (
        <div>
            <Height height={height}/>
            <Mass mass={mass}/>
            <HairColor hairColor={hairColor}/>
            <EyeColor eyeColor={eyeColor}/>
            <SkinColor skinColor={skinColor}/>
            <BirthYear birthYear={birthYear}/>
            <Gender gender={gender}/>
            <HomeWorld homeWorld={homeWorld}/>
        </div>
    )
}

export default ContentContainer