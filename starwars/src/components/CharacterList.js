import React from 'react'
import Name from './Name'
import BirthYear from './BirthYear'
import Created from './Created'
import Edited from './Edited'
import EyeColor from './EyeColor'
import Films from './Films'
import Gender from './Gender'


const CharacterList = props => {
  return (
    <div>
      {props.characters.map(profile => (
        <p>
          <Name profile={profile}/>
          <BirthYear profile={profile}/>
          <Created profile={profile}/>
          <Edited profile={profile} />
          <EyeColor profile={profile} />
          <Films profile={profile} />
          <Gender profile={profile}/>
        </p>

      ))}
    </div>
  )
}

export default CharacterList