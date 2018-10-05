import React from 'react'
import Name from './Name'
import BirthYear from './BirthYear'
import Created from './Created'
import Edited from './Edited'
import EyeColor from './EyeColor'
import Films from './Films'
import Gender from './Gender'
import Hair from './HairColor'
import Height from './Height'
import HomeWorld from './HomeWorld'
import Mass from './Mass'
import SkinColor from './SkinColor'
import Species from './Species'
import Starships from './Starships'
import Vehicles from './Vehicles'


const CharacterList = props => {
  return (
    <div>
      {props.characters.map(profile => (
        <div>
          <h2><Name profile={profile}/></h2>
          <BirthYear profile={profile}/>
          <Created profile={profile}/>
          <Edited profile={profile} />
          <EyeColor profile={profile} />
          <Films films={profile.films} />
          <Gender profile={profile}/>
          <Hair profile={profile}/>
          <Height profile={profile} />
          <HomeWorld profile={profile} />
          <Mass profile={profile} />
          <SkinColor profile={profile} />
          <Species species={profile.species} />
          <Starships starships={profile.starships} />
          <Vehicles vehicles={profile.vehicles} />
        </div>

      ))}
    </div>
  )
}

export default CharacterList